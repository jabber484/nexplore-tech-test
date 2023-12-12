import { useEffect, useState } from "react"
import { Duty } from "../api/duty/duty.entity"
import { getDuties } from "../api/duty"

export function useDuty() {
  const [duties, setDuties] = useState<Duty[]>([])
  const [error, setError] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      const data = await getDuties();
      setDuties(data)
      setError(false)
    } catch (e) {
      setError(true)
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  return { duties, error }
}