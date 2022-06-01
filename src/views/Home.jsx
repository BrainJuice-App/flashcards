import React, { useState } from 'react';
import CardList from '../components/CardList';
import { useCard } from '../context/cardsContext/cardsContext';
import { Button } from '@mui/material';

export default function Home() {
  const { cards, setCards } = useCard();

  const shuffleCards = () => {
    const shuffledCards = [...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }))
      .slice(0, 2)
 

    setCards(shuffledCards);
    // setCards(shuffledCards.slice(0, 2));

    console.log(shuffledCards);

    // return array[shuffledCards];

    shuffledCards= [cards(sorted)]
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
