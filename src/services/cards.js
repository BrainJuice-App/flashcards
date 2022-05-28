import { checkError, client } from './client';

export async function getCards() {
  const resp = await client.from('cards').select('*');
  console.log('resp', resp);
  return checkError(resp);
}

export async function createCard(card) {
  const resp = await client.from('cards').insert(card);
  return checkError(resp);
}
export async function deleteCard(id) {
  const request = await client.from('cards').delete().match({ id });
  return checkError(request);
}
