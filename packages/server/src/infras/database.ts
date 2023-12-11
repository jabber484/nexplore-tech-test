import { Client } from 'pg'

let client: Client

const init = async () => {
  client = new Client();
  await client.connect()
}

const close = async () => {
  await client.end()
}

export { init, close, client }