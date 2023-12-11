import express, { NextFunction, Request, Response } from "express";
import { CreateDutyRequest, Duty } from "./duty.entity";
import { createDuty, deleteDutyById, getDutyById, updateDuty } from "./duty.service";

const dutyController = express.Router();

dutyController.get("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  if (id) {
    const duty = await getDutyById(id)
    res.json(duty);
  } else {
    next(new Error("Param not found"))
  }
});

dutyController.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body as CreateDutyRequest
  if (data.name) {
    const { id } = await createDuty(data)
    res.json({ id });
  } else {
    next(new Error("Body not found"))
  }
});

dutyController.put("/", async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body as Duty
  if (data) {
    const duty = await updateDuty(data)
    res.json(duty);
  } else {
    next(new Error("Body not found"))
  }
});

dutyController.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id
  if (id) {
    const deleted = await deleteDutyById(id)
    res.json({ deleted });
  } else {
    next(new Error("Param not found"))
  }
});

export { dutyController }