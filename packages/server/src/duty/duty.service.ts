import { EntityNotFoundError } from "../error/error";
import { CreateDutyRequest, Duty } from "./duty.entity";
import { createOne, deleteOne, findAll, findOne, updateOne } from "./duty.repository";

export const getDuties = async (skip?: number, limit?: number): Promise<Array<Duty>> => {
  return findAll(skip, limit)
}

export const getDutyById = async (id: string): Promise<Duty> => {
  const result = await findOne(id);
  if (result) {
    return result
  } else {
    throw new EntityNotFoundError(`Cannot find entry with id: ${id}`)
  }
}

export const createDuty = async (duty: CreateDutyRequest): Promise<Duty> => {
  return createOne(duty)
}

export const updateDuty = async (duty: Duty): Promise<Duty> => {
  const result = await updateOne(duty)
  if (result) {
    return result
  } else {
    throw new EntityNotFoundError(`Cannot find entry with id: ${duty.id}`)
  }
}

export const deleteDutyById = async (id: string): Promise<boolean> => {
  const result = await deleteOne(id)
  if (result) {
    return result
  } else {
    throw new EntityNotFoundError(`Cannot find entry with id: ${id}`)
  }
}