import express, { Request, Response } from "express";
import { CreateDutyRequest, Duty, dutySample } from "./duty.entity";
import { createDuty, deleteDutyById, getDutyById, updateDuty } from "./duty.service";

const dutyController = express.Router();

dutyController.get("/:id", (req: Request, res: Response) => {
  const id = req.params.id
  if (id) {
    const duty = getDutyById(id)
    res.json(duty);
  } else {
    throw new Error("Param not found")
  }
});

dutyController.post("/", (req: Request, res: Response) => {
  const data = req.body as CreateDutyRequest
  if (data) {
    const _id = createDuty(data)
    res.json(data);
  } else {
    throw new Error("Body not found")
  }
});

dutyController.put("/", (req: Request, res: Response) => {
  const data = req.body as Duty
  if (data) {
    const duty = updateDuty(data)
    res.json(duty);
  } else {
    throw new Error("Body not found")
  }
});

dutyController.delete("/:id", (req: Request, res: Response) => {
  const id = req.params.id
  if (id) {
    const duty = deleteDutyById(id)
    res.json(duty);
  } else {
    throw new Error("Param not found")
  }
});

export { dutyController }