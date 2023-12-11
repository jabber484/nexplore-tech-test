import express, { Express } from "express";
import { dutyController } from "./duty";
import bodyParser from "body-parser";
import { errorHandler } from "./error/errorHandler";

export const startWebServer = () => {
  const app: Express = express();
  app.use(bodyParser.json())
  app.use("/duty", dutyController)
  app.use(errorHandler)

  return app
}
