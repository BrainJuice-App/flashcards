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

  return checkError(resp);
}

export async function updateProfile(profile) {
  console.log(profile);
  const resp = await client
    .from('profile')
    .update({
      id: profile.id,
      first_name: profile.first_name,
      last_name: profile.last_name,
      username: profile.username,
      bio: profile.bio,
    })
    .match({ id: profile.id });

  return checkError(resp);

  ///find out what profile is///
}

// export async function updateProfileData(
//   userName,
//   profile_picture,
//   bio,
//   favorite_food
// ) {
//   const user = await client
//     .from('profiles')
//     .update({ profile_picture, userName, bio, favorite_food })
//     .match({ id: getUserId() });

//   return checkError(user);
// }
