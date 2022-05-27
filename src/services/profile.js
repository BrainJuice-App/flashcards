import { checkError, client } from './client';

export async function getProfile(id) {
  const resp = await client
    .from('profile')
    .select('*')
    .match({ id: id })
    .single();
  return checkError(resp);
}

export async function createProfile(id) {
  const resp = await client.from('profile').insert({ id });
  console.log('CreateProfile has been called', resp, id);
  return checkError(resp);
}
