import express, { NextFunction, Request, Response } from "express";
import { CreateDutyRequest, Duty } from "./duty.entity";
import { createDuty, deleteDutyById, getDuties, getDutyById, updateDuty } from "./duty.service";
import { MissingParamError } from "../error/error";

const dutyController = express.Router();

dutyController.get("/", async (req: Request, res: Response, next: NextFunction) => {
  const skip = Number.parseInt(req.query.skip as string)
  const limit = Number.parseInt(req.query.limit as string)
  
  const duties = await getDuties(skip, limit)
  res.json(duties);
});

dutyController.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    if (id) {
      const duty = await getDutyById(id)
      res.json(duty);
    } else {
      throw new MissingParamError("id")
    }
  } catch (e) {
    next(e)
  }
});

dutyController.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body as CreateDutyRequest
    if (data.name) {
      const { id } = await createDuty(data)
      res.json({ id });
    } else {
      throw new MissingParamError("name")
    }
  } catch (e) {
    next(e)
  }
});

dutyController.put("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const data = req.body as Duty
    if (data.id && data.name) {
      const duty = await updateDuty(data)
      res.json(duty);
    } else {
      throw new MissingParamError("id and/or name")
    }
  } catch (e) {
    next(e)
  }
});

dutyController.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const id = req.params.id
    if (id) {
      const deleted = await deleteDutyById(id)
      res.json({ deleted });
    } else {
      throw new MissingParamError("id")
    }
  } catch (e) {
    next(e)
  }
});

export { dutyController }