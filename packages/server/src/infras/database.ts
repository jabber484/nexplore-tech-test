import { Client } from 'pg'

let client: Client

const init = async () => {
  client = new Client();
  await client.connect()
}

export { init, client }