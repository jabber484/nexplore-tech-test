export interface Duty {
  id: string,
  name: string
}

export type CreateDutyRequest = Omit<Duty, "id">;