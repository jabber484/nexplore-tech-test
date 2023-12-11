import express, { Express } from "express";
import dotenv from "dotenv";
import { dutyController } from "./duty";
import bodyParser from "body-parser";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use("/duty", dutyController)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});