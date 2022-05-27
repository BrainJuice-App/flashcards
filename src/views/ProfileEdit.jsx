import React from 'react';
import ProfileForm from '../components/ProfileForm';
import { updateProfile } from '../services/profile';
import { useProfileContext } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';

export default function ProfileEdit() {
  const { firstName, lastName, username, bio } = useProfileContext();
  const { user } = useUser();

  const submitProfileHandler = async (e) => {
    console.log('button clicked');
    e.preventDefault;

    const updates = {
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      username: username,
      bio: bio,
    };
    await updateProfile(updates);
  };

  return (
    <>
      <div>Edit your profile</div>
      <ProfileForm submitProfileHandler={submitProfileHandler} />
    </>
  );
}
