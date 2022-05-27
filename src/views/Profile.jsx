import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProfileContext } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';
import { getProfile } from '../services/profile';
import { useEffect } from 'react';

export default function Profile() {
  const history = useHistory();
  const { user } = useUser();
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,
    email,
    setEmail,
    bio,
    setBio,
  } = useProfileContext();

  const handleEditButtonClick = () => {
    history.push(`/profile/${user.id}/edit`);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile(user.id);
      console.log(data);
      setFirstName(data.user.first_name);
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div>{user.email}'s Profile</div>
      <button onClick={handleEditButtonClick}>Edit</button>
    </>
  );
}
