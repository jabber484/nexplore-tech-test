import axios from "axios";
import { CreateDutyRequest, Duty } from "./duty.entity";

const client = axios.create({
  baseURL: import.meta.env.VITE_SERVER_HOST || "",
});

const getDuties = async (skip?: number, limit?: number): Promise<Duty[]> => {
  const res = await client.get(`/duty?skip=${skip}&limit=${limit}`)
  return res.data
}

const getDutyById = async (id: string): Promise<Duty> => {
  const res = await client.get(`/duty/${id}`)
  return res.data
}

const createDuty = async (req: CreateDutyRequest): Promise<void> => {
  await client.post("/duty", req)
}

const updateDuty = async (data: Duty): Promise<Duty> => {
  const res = await client.put(`/duty/`, data)
  return res.data
}

const deleteDuty = async (id: string): Promise<void> => {
  await client.get(`/duty/${id}`)
}

export {
  getDuties, getDutyById, createDuty, updateDuty, deleteDuty
}