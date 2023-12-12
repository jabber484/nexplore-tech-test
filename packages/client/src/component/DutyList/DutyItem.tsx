import { Card, message } from "antd"
import { Duty } from "../../api/duty/duty.entity"
import { Input } from 'antd';
import { useEffect, useState } from "react"
import { CheckOutlined, CloseOutlined, DeleteOutlined, EditOutlined } from "@ant-design/icons";

interface prop {
  duty?: Duty
  onDelete: (id: string) => void
  onEdit: (content: string) => Promise<void>
  onClose?: () => void
}

export const DutyItem: React.FC<prop> = ({ duty, onDelete, onEdit, onClose }) => {
  const [messageApi, contextHolder] = message.useMessage();

  const [isEditMode, setEditMode] = useState<boolean>(!duty)
  const [hasError, setHasError] = useState<boolean>(false)
  const [editBuffer, setEditBuffer] = useState<string>("")
  const { TextArea } = Input;

  useEffect(() => {
    if (duty && isEditMode) {
      setHasError(false)
      setEditBuffer(duty.name)
    } else if (!isEditMode) {
      onClose && onClose()
    }
  }, [isEditMode])

  const onSubmitChange = () => {
    if (editBuffer) {
      onEdit(editBuffer).then(() => { setEditMode(false) }).catch((e) => {
        setHasError(true);
        messageApi.error('Cannot update duty: ' + e);
      })
    } else {
      setHasError(true);
      messageApi.error('Field cannot be null');
    }
  }

  const renderAction = () => {
    if (isEditMode) {
      return [
        <CloseOutlined key="discard" onClick={() => setEditMode(false)} />,
        <CheckOutlined key="sumbit" onClick={() => onSubmitChange()} />,
      ]
    } else {
      return [
        <DeleteOutlined key="delete" onClick={() => onDelete(duty ? duty.id : "")} />,
        <EditOutlined key="edit" onClick={() => setEditMode(true)} />,
      ]
    }
  }

  const renderContent = () => {
    return isEditMode ?
      <TextArea
        className="w-full"
        autoSize
        status={hasError ? "error" : ""}
        value={editBuffer}
        onChange={(e) => setEditBuffer(e.target.value)}
      /> :
      duty?.name
  }

  return (
    <>
      {contextHolder}
      <Card
        className="w-full"
        actions={renderAction()}
      >
        <div className="">{duty ? "#" + (duty.id + 1) : "TODO"}</div>
        <div className="break-all h-20 mt-2 overflow-y-auto">
          {renderContent()}
        </div>
      </Card>
    </>
  )
}