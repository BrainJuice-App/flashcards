import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCard } from '../context/cardsContext/cardsContext';

export default function CardView({ cards = [] }) {
  console.log('cards', cards);
  const { id } = useParams();
  const { handleDelete } = useCard();
  const { card, setCard } = useCard();

  useEffect(() => {
    const selectedCard = cards.find((card) => card.id === Number(id));
    setCard(selectedCard);
  }, [id]);
  return (
    <div>
      <h2>
        <p>{card.content}</p>
        <button onClick={handleDelete}>delete card</button>
      </h2>
    </div>
  );
}
