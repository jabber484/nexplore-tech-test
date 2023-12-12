import { Col, Row } from "antd"
import { useDuty } from "../../hooks/useDuty"
import { DutyItem } from "./DutyItem"

export const DutyList = () => {
  const { duties, deleteEntry } = useDuty()

  return (
    <Row gutter={[16, 16]} className="m-0">
      {duties.map((duty, i) => {
        return <Col xs={24} sm={12} md={6} lg={6} key={i}>
          <DutyItem duty={duty} onDelete={() => deleteEntry(duty.id)} />
        </Col>
      })}
    </Row>
  )
}