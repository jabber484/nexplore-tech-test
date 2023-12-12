import { Layout } from "antd"
import { DutyList } from "./component/DutyList/DutyList"
import { Content } from "antd/es/layout/layout"

function App() {

  return (
    <Layout className="min-h-screen">
      <Content className="h-full my-8 mx-4 lg:mx-16">
        <DutyList />
      </Content>
    </Layout>
  )
}

export default App
