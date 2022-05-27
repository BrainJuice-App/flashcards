import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function CardView({ cards = [] }) {
  console.log('cards', cards);
  const { id } = useParams();
  const [card, setCard] = useState({});

  useEffect(() => {
    const selectedCard = cards.find((card) => card.id === Number(id));
    setCard(selectedCard);
  }, [id]);
  return (
    <div>
      <ul>
        <li>{card.content}</li>
      </ul>
    </div>
  );
}
