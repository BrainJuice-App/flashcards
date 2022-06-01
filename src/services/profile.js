import { checkError, client } from './client';

export async function getProfile(id) {
  const resp = await client.from('profile').select('*').match({ id }).single();
  console.log('fetch resp', resp);
  return checkError(resp);
}

export async function createProfile(id) {
  const resp = await client.from('profile').insert({ id });

  return checkError(resp);
}

export async function updateProfile(profile) {
  const resp = await client
    .from('profile')
    .update({
      id: profile.id,
      first_name: profile.first_name,
      last_name: profile.last_name,
      username: profile.username,
      bio: profile.bio,
      image: profile.image,
    })
    .match({ id: profile.id });
  console.log('resp', resp);

  return checkError(resp);
}

export async function fetchSignedUrl(x) {
  const resp = await client.storage
    .from('profilebucket')
    .createSignedUrl(x, 315360000);
  return checkError(resp);
}
