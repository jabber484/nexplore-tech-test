import { Duty } from "./duty.entity";

const dutySample: Duty = {
  id: "2678", name: "sample"
}

export const getDutyById = (id: string): Duty => {
  return { ...dutySample, id: id }
}
