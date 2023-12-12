import { Button, Col, Row, message } from "antd"
import { useDuty } from "../../hooks/useDuty"
import { DutyItem } from "./DutyItem"
import { PlusCircleFilled } from "@ant-design/icons"
import { useState } from "react"

export const DutyList = () => {
  const [isCreating, setIsCreating] = useState<boolean>(false)

  const { duties, deleteEntry, editEntry, createEntry } = useDuty()
  const [messageApi, contextHolder] = message.useMessage();

  const onCreateEntry = async (data: string) => {
    try {
      await createEntry({ name: data })
      setIsCreating(false)
    } catch (e) {
      messageApi.error("Cannot create entry")
    }
  }

  return (
    <>
      {contextHolder}
      <Row gutter={[16, 16]} className="m-0">
        <Col xs={24} sm={12} md={12} lg={6}>
          <div className="h-full flex justify-end sm:justify-center items-center">
            {
              isCreating ? <DutyItem
                onDelete={() => null}
                onEdit={(name) => onCreateEntry(name)}
                onClose={() => setIsCreating(false)}
              /> :
                <div className="sm:h-52 flex justify-end sm:justify-center items-center">
                  <Button
                    type="default"
                    color="primary"
                    size="large"
                    icon={<PlusCircleFilled />}
                    onClick={() => setIsCreating(true)}
                  >
                    Create
                  </Button>
                </div>
            }
          </div>
        </Col>

        {duties.map((duty, i) => {
          return <Col xs={24} sm={12} md={12} lg={6} key={i}>
            <DutyItem
              duty={duty}
              onDelete={() => deleteEntry(duty.id)}
              onEdit={(name) => editEntry({ ...duty, name })}
            />
          </Col>
        })}
      </Row>
    </>
  )
}