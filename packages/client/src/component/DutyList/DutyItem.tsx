import { Card } from "antd"
import { Duty } from "../../api/duty/duty.entity"

interface prop {
  duty: Duty
}

export const DutyItem: React.FC<prop> = ({ duty }) => {

  if (!duty) {
    return null
  }

  return (
    <Card className="w-full flex flex-row">
      <div className="absolute right-3 top-2">
        <span className="text-red-400 underline-offset-2 underline cursor-pointer select-none ml-2">Delete</span>
        <span className="text-gray-400 underline-offset-2 underline cursor-pointer select-none ml-2">Edit</span>
      </div>
      <div>#{duty.id + 1}</div>
      <div className="break-all h-24 overflow-y-auto">{duty.name}</div>
    </Card>
  )
}