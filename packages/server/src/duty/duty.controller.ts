import express, { Request, Response } from "express";
import { dutySample } from "./duty.entity";
import { getDutyById } from "./duty.service";

const dutyController = express.Router();

dutyController.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id
  if (id) {
    const duty = getDutyById(id)
    res.json(duty);
  } else {
    throw new Error("Entity not found")
  }
});

dutyController.post("/", (req: Request, res: Response) => {
  res.json(dutySample);
});

dutyController.put("/", (req: Request, res: Response) => {
  res.json(dutySample);
});

dutyController.delete("/", (req: Request, res: Response) => {
  res.json(dutySample);
});

export { dutyController }