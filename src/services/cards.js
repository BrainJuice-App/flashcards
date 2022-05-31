import { checkError, client } from './client';
import { getUser } from './user';

export async function getCards() {
  const resp = await client.from('cards').select('*');
  console.log('resp', resp);
  return checkError(resp);
}

export async function createCard(card) {
  const resp = await client.from('cards').insert(card);
  return checkError(resp);
}
// export async function deleteCard(id) {
//   const request = await client.from('cards').delete().match({ id });
//   console.log('request', request);
//   return checkError(request);
// }

export async function getProfileCards() {
  const profileCard = await client
    .from('cards')
    .select('*')
    .match({ creator: getUser().id });

  console.log('profile cards ', profileCard);
  return checkError(profileCard);
}
