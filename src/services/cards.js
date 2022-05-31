import { useUser } from '../context/UserContext';
import { checkError, client } from './client';
import { getUser } from './user';

export async function getCards() {
  console.log(getUser());
  const resp = await client.from('cards').select('*');
  const cards = checkError(resp);
  const cardsFilteredByIdAndNull = cards.filter(
    (card) => card.creator == getUser().id || card.creator == null
  );
  return cardsFilteredByIdAndNull;
}

export async function createCard(card) {
  const resp = await client.from('cards').insert(card);
  return checkError(resp);
}
export async function deleteCard(id) {
  const request = await client.from('cards').delete().match({ id });
  console.log('request', request);
  return checkError(request);
}

export async function getProfileCards() {
  const profileCard = await client
    .from('cards')
    .select('*')
    .match({ creator: getUser().id });

  console.log('profile cards ', profileCard);
  return checkError(profileCard);
}
export async function updateCards(card) {
  const resp = await client
    .from('cards')
    .update({
      name: card.name,
      content: card.content,
    })
    .match({ id: card.id });
  console.log;
  return checkError(resp);
}
