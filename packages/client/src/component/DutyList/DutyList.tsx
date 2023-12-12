import { Card, Col, Row } from "antd"
import { useDuty } from "../../hooks/useDuty"
import { DutyItem } from "./DutyItem"

export const DutyList = () => {
  const { duties } = useDuty()

  return (
    <Row gutter={[16, 16]} style={{ margin: 0 }}>
      {duties.map((duty, i) => {
        return <Col xs={24} sm={12} md={6} lg={6} key={i}>
          <DutyItem duty={duty} />
        </Col>
      })}
    </Row>
  )
}