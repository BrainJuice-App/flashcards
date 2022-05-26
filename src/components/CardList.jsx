import { useEffect } from 'react';
import { useCard } from '../context/cardsContext/cardsContext';
import { getCards } from '../services/cards';

export default function CardList() {
  const { cards, setCards, loading, setLoading } = useCard();

  useEffect(() => {
    const getData = async () => {
      const data = await getCards();
      setCards(data);
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
          <p key={card.id}>{card.name}</p>
        ))}
      </div>
    </>
  );
}
