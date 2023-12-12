import express, { Express } from "express";
import { dutyController } from "./duty";
import bodyParser from "body-parser";
import cors from "cors";
import { errorHandler } from "./error/errorHandler";

export const startWebServer = () => {
  const app: Express = express();
  app.use(cors())
  app.use(bodyParser.json())
  app.use("/duty", dutyController)
  app.use(errorHandler)

  return app
}
