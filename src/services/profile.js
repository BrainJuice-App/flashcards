import { checkError, client } from './client';

export async function getProfile(id) {
  const resp = await client
    .from('profile')
    .select('*')
    .match({ id: id })
    .single();
  return checkError(resp);
}
