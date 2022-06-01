import React, { useState } from 'react';
import CardList from '../components/CardList';
import { useCard } from '../context/cardsContext/cardsContext';
import { Button } from '@mui/material';
import styles from './Home.css';

export default function Home() {
  const { cards, setCards } = useCard();
  const [newCards, setNewCards] = useState([]);
  console.log(newCards);

  const shuffleCards = () => {
    const shuffledCards = [...cards].sort(() => Math.random() - 0.5);
    // .map((card) => ({ ...card, id: Math.random() }));
    let hand = [];
    for (let i = 0; i < 8; i++) {
      hand.push(shuffledCards[i]);
    }
    console.log(hand);
    setNewCards(hand);
  };

  return (
    <div className={styles.home}>
      <Button
        variant="outlined"
        sx={{
          color: 'red',
          backgroundColor: '#1826d2',
          borderColor: 'green',
          margin: '5px',
        }}
        onClick={shuffleCards}
      >
        Shuffle
      </Button>
      <CardList newCards={newCards} />
      <h3></h3>
    </div>
  );
}
