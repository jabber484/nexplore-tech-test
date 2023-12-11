import express, { Request, Response } from "express";
import { dutySample } from "./duty.entity";

const dutyController = express.Router();

dutyController.get("/", function (req: Request, res: Response) {
  res.json(dutySample);
});

dutyController.post("/", function (req: Request, res: Response) {
  res.json(dutySample);
});

dutyController.put("/", function (req: Request, res: Response) {
  res.json(dutySample);
});

dutyController.delete("/", function (req: Request, res: Response) {
  res.json(dutySample);
});

export { dutyController }