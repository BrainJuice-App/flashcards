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
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setUsername(data.username);
      setBio(data.bio);
    };
    fetchProfile();
  }, []);

  return (
    <>
      <div>
        <h2>{username ? username : user.email}'s Profile</h2>
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{bio}</p>
      </div>
      <div>
        <h2>Your Personal Cards</h2>
      </div>

      <button onClick={handleEditButtonClick}>Edit</button>
    </>
  );
}
