import { checkError, client } from "./client";

export default function getCards() {
  const resp = await client.from('cards').select('*')
  return checkError(resp);
}
