import React from 'react';
import ProfileForm from '../components/ProfileForm';
import { updateProfile } from '../services/profile';
import { useProfileContext } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { toast } from 'react-hot-toast';

export default function ProfileEdit() {
  const { firstName, lastName, username, bio } = useProfileContext();
  const { user } = useUser();
  const history = useHistory();

  const submitProfileHandler = async (e) => {
    e.preventDefault;

    const updates = {
      id: user.id,
      first_name: firstName,
      last_name: lastName,
      username: username,
      bio: bio,
    };
    await updateProfile(updates);
    history.push('/profile');
    toast.success('You have successfully updated your profile!');
  };

  return (
    <>
      <div>Edit your profile</div>
      <ProfileForm submitProfileHandler={submitProfileHandler} />
    </>
  );
}
