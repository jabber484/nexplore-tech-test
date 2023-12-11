export interface Duty {
  id: string,
  name: string
}

export type CreateDutyRequest = Omit<Duty, "id">;

export const dutySample: Duty = {
  id: "2678", name: "sample"
}