import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCard } from '../context/cardsContext/cardsContext';

export default function CardView({ cards = [] }) {
  console.log('cards', cards);
  const { id } = useParams();
  const { card, setCard, error, setError } = useCard();

  useEffect(() => {
    try {
      const selectedCard = cards.find((card) => card.id === Number(id));
      setCard(selectedCard);
    } catch (error) {
      setError('unable to display user cards');
    }
  }, [id]);
  return (
    <div>
      <p>{error}</p>

      <p key={card.id}>{card.content}</p>
    </div>
  );
}
