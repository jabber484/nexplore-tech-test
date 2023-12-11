import express, { Express } from "express";
import dotenv from "dotenv";
import { dutyController } from "./duty";
import bodyParser from "body-parser";
import { init as initDatabase } from "./infras/database";
import { errorHandler } from "./error/errorHandler";

const startWebServer = () => {
  const app: Express = express();
  const port = process.env.PORT || 3000;

  app.use(bodyParser.json())
  app.use("/duty", dutyController)
  app.use(errorHandler)

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
}

dotenv.config();
initDatabase().then(() => {
  console.log(`[database]: Database is connected at ${process.env.PGHOST}:${process.env.PGPORT}`);
  startWebServer();
});