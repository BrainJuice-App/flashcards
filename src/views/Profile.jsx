import React from 'react';
import { useHistory } from 'react-router-dom';
import { useProfileContext } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';
import { getProfile } from '../services/profile';
import { useEffect } from 'react';
import UserCards from '../components/UserCards';
import { Link } from '@mui/material';

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
    bio,
    setBio,
    setAvatarUrl,
    imageUrl,
    image,
    setImage,
  } = useProfileContext();

  const handleEditButtonClick = () => {
    history.push(`/profile/${user.id}/edit`);
  };
  const redirectToCreateCard = () => {
    history.replace(`/createCard`);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile(user.id);
      console.log(data);
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setUsername(data.username);
      setBio(data.bio);
      setAvatarUrl(data.image);
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
        <img src={imageUrl} height="150" />
        {/* /// removes image on refresh, needs to be changed to image// */}
      </div>
      <div>
        <h2>Your Personal Cards</h2>

        {/* <UserCards /> */}

        <button onClick={redirectToCreateCard}> Create Card</button>
      </div>

      <button onClick={handleEditButtonClick}>Edit Profile</button>
    </>
  );
}
