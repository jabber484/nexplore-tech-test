import { CreateDutyRequest, Duty } from "./duty.entity";
import { createOne, deleteOne, findOne, updateOne } from "./duty.repository";

export const getDutyById = (id: string): Promise<Duty> => {
  return findOne(id)
}

export const createDuty = async (duty: CreateDutyRequest): Promise<Duty> => {
  return createOne(duty)
}

export const updateDuty = async (duty: Duty): Promise<Duty> => {
  return updateOne(duty)
}

export const deleteDutyById = (id: string): Promise<boolean> => {
  return deleteOne(id)
}