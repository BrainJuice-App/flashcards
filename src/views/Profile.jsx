import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useProfileContext } from '../context/ProfileContext';
import { useUser } from '../context/UserContext';
import { getProfile } from '../services/profile';
import { useEffect } from 'react';
import { getProfileCards } from '../services/cards';
import { Link } from 'react-router-dom';
import styles from './Profile.css';
import { useCard } from '../context/cardsContext/cardsContext';
import { Button } from '@mui/material';

export default function Profile() {
  const { cards, setCards } = useCard();
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
    image,
    setImage,
  } = useProfileContext();
  const [loading, setLoading] = useState(true);

  const handleEditButtonClick = () => {
    history.push(`/profile/${user.id}/edit`);
  };
  const redirectToCreateCard = () => {
    history.replace(`/createCard`);
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile(user.id);
      const userCards = await getProfileCards();
      setFirstName(data.first_name);
      setLastName(data.last_name);
      setUsername(data.username);
      setBio(data.bio);
      setImage(data.image);
      setCards(userCards);
      setLoading(false);
    };
    fetchProfile();
  }, []);

  if (loading) return <p>loading</p>;
  return (
    <div className={styles.profile}>
      <div>
        <h2>{username ? username : user.email}'s Profile</h2>
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{bio}</p>
        <img src={image} height="150" />
      </div>
      <div>
        <h2>Your Personal Cards</h2>

        <div className={styles.cards}>
          {cards.map((card) => (
            <div key={card.id}>
              <Link style={{ color: 'white' }} to={`/profile/${card.id}`}>
                {card.name}
              </Link>
            </div>
          ))}
        </div>

        <Button
          sx={{
            color: 'red',
            backgroundColor: '#1826d2',
            borderColor: 'green',
            margin: '5px',
          }}
          onClick={redirectToCreateCard}
        >
          {' '}
          Create Card
        </Button>
      </div>

      <Button
        sx={{
          color: 'red',
          backgroundColor: '#1826d2',
          borderColor: 'green',
          margin: '5px',
        }}
        onClick={handleEditButtonClick}
      >
        Edit Profile
      </Button>
    </div>
  );
}

//profile cards to be fetched and rendered here, they link to profile/id page for editing...
