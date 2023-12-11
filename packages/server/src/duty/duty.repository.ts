import { client } from "../infras/database"
import { CreateDutyRequest, Duty } from "./duty.entity"

const FIND_ALL_LIMIT = 50

export const findAll = async (skip?: number, limit?: number): Promise<Array<Duty>> => {
  const text = 'SELECT id,name FROM duty ORDER BY id DESC OFFSET $1 LIMIT $2'
  const values = [skip ? skip : 0, limit ? limit : FIND_ALL_LIMIT]

  const res = await client.query(text, values)
  return res.rows
}

export const findOne = async (id: string): Promise<Duty> => {
  const text = 'SELECT id, name FROM duty WHERE id = $1'
  const values = [id]

  const res = await client.query(text, values)
  return res.rows[0] as Duty
}

export const createOne = async (duty: CreateDutyRequest): Promise<Duty> => {
  const text = 'INSERT INTO duty(name) VALUES($1) RETURNING id, name'
  const values = [duty.name]

  const res = await client.query(text, values)
  return res.rows[0] as Duty
}

export const updateOne = async (duty: Duty): Promise<Duty> => {
  const text = 'UPDATE duty SET name = $1 WHERE id = $2 RETURNING id, name'
  const values = [duty.name, duty.id]

  const res = await client.query(text, values)
  return res.rows[0] as Duty
}

export const deleteOne = async (id: string): Promise<boolean> => {
  const text = 'DELETE FROM duty WHERE id = $1'
  const values = [id]

  const res = await client.query(text, values)
  return !!res.rowCount
}