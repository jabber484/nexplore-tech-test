import { NextFunction, Request, Response } from "express";
import { PostgresError } from 'pg-error-enum';
import { EntityNotFoundError, MissingParamError } from "./error";

const handleDatabaseError = (err: any, req: Request, res: Response) => {
  if (err.code && Object.values(PostgresError).includes(err.code)) {
    res.status(500)
    res.json({
      error: {
        type: "Database Error",
        code: err.code
      }
    })
  }
}

const handleEntityNotFoundError = (err: any, req: Request, res: Response) => {
  if (err instanceof EntityNotFoundError) {
    res.status(422)
    res.json({
      error: {
        type: "Entity Not Found",
        message: err.message
      }
    })
  }
}

const handleMissingParamError = (err: any, req: Request, res: Response) => {
  if (err instanceof MissingParamError) {
    res.status(500)
    res.json({
      error: {
        type: "Missing Param",
        param: err.message
      }
    })
  }
}

export function errorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  handleDatabaseError(err, req, res)
  handleEntityNotFoundError(err, req, res)
  handleMissingParamError(err, req, res)

  // fallback
  if (!res.headersSent) {
    res.status(500)
    res.json({
      error: {
        type: "Unexpected Error",
        content: err
      }
    })
  }
}