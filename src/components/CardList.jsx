import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useCard } from '../context/cardsContext/cardsContext';
import { getCards } from '../services/cards';
import CardView from '../views/CardView';

export default function CardList() {
  const { cards, setCards, loading, setLoading } = useCard();

  useEffect(() => {
    const getData = async () => {
      const data = await getCards();
      setCards(data);
      console.log('data', data);
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) return <div>loading</div>;

  return (
    <>
      <div>
        hello
        {cards.map((card) => (
          <Link to={`/card-view/${card.id}`}>
            <p key={card.id}>{card.name}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
