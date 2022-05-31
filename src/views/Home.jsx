import React from 'react';
import CardList from '../components/CardList';
import { GiBrain } from 'react-icons/gi';

export default function Home() {
  const shuffleCards = () => {
    const shuffledCards = [...cards]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCardsState(shuffledCards);
    setTurns(0);
    console.log(shuffledCards);
  };

  return (
    <div>
      Home
      <button onClick={shuffleCards}>Shuffle</button>
      <CardList />
      <h3>
        <GiBrain />
      </h3>
    </div>
  );
}
