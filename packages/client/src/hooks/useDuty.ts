import { useEffect, useState } from "react"
import { Duty } from "../api/duty/duty.entity"
import { deleteDuty, getDuties } from "../api/duty"

export function useDuty() {
  const [duties, setDuties] = useState<Duty[]>([])
  // const [error, setError] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      const data = await getDuties();
      setDuties(data)
      // setError(false)
    } catch (e) {
      // setError(true)
    }
  }

  const deleteEntry = async (id: string) => {
    try {
      await deleteDuty(id)
      await fetchData();
    } catch (e) {
      console.error("Cannot delete duty")
    }

  }

  useEffect(() => {
    fetchData();
  }, [])

  return { duties, deleteEntry }
}