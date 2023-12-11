import { CreateDutyRequest, Duty } from "./duty.entity";

const dutySample: Duty = {
  id: "2678", name: "sample"
}

export const getDutyById = (id: string): Duty => {
  return { ...dutySample, id: id }
}

export const createDuty = (duty: CreateDutyRequest): string => {
  return "id"
}

export const updateDuty = (duty: Duty): Duty => {
  return duty
}

export const deleteDutyById = (id: string): boolean => {
  return true
}