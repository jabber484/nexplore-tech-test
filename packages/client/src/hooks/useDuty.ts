import { useEffect, useState } from "react"
import { CreateDutyRequest, Duty } from "../api/duty/duty.entity"
import { createDuty, deleteDuty, getDuties, updateDuty } from "../api/duty"

export function useDuty() {
  const [duties, setDuties] = useState<Duty[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [hasFetchError, setFetchError] = useState<boolean>(false)

  const throwError = (e: any) => {
    // Error handler, add tracking here
    console.error(e)
    throw e
  }

  const fetchData = async () => {
    try {
      const data = await getDuties();
      setDuties(data)
      setFetchError(false)
      setIsLoading(false)
    } catch (e) {
      setFetchError(true)
      throwError(e)
    }
  }

  const createEntry = async (req: CreateDutyRequest) => {
    try {
      await createDuty(req);
      await fetchData();
    } catch (e) {
      throwError(e)
    }
  }

  const editEntry = async (data: Duty) => {
    try {
      await updateDuty(data);
      await fetchData();
    } catch (e) {
      throwError(e)
    }
  }

  const deleteEntry = async (id: string) => {
    try {
      await deleteDuty(id)
      await fetchData();
    } catch (e) {
      throwError(e)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { duties, deleteEntry, editEntry, createEntry, isLoading, hasFetchError }
}