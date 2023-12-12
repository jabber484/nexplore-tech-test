import { useDuty } from "../../hooks/useDuty"

export const DutyList = () => {
  const { duties } = useDuty()

  return (
    <div>
      {duties.map((duty,) => {
        return <div>{duty.name}</div>
      })}
    </div>
  )
}