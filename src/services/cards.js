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
