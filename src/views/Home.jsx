import React, { useState } from 'react';
import CardList from '../components/CardList';
import { useCard } from '../context/cardsContext/cardsContext';
import { Button } from '@mui/material';

export default function Home() {
  const { cards, setCards } = useCard();
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
    console.log(shuffledCards);
    // return array[shuffledCards];
  };

  return (
    <div>
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
      <CardList />
      <h3></h3>
    </div>
  );
}
