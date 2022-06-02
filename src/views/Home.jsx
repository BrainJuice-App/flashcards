import React, { useState } from 'react';
import CardList from '../components/CardList';
import { useCard } from '../context/cardsContext/cardsContext';
import { Button } from '@mui/material';
import styles from './Home.css';

export default function Home() {
  const { cards, setCards } = useCard();
  const [newCards, setNewCards] = useState([]);

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);

    let hand = [];
    for (let i = 0; i < 8; i++) {
      hand.push(shuffledCards[i]);
    }
    setNewCards(hand);
  };

  return (
    <div className={styles.home}>
      <Button
        className={styles.shuffle}
        variant="outlined"
        sx={{
          color: 'red',
          backgroundColor: '#1826d2',
          borderColor: 'green',
          marginLeft: '35px',
        }}
        onClick={shuffleCards}
      >
        Shuffle
      </Button>
      <CardList newCards={newCards} />
    </div>
  );
}
