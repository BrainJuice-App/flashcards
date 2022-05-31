import { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
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
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Link to={`/${card.id}`}>{card.name}</Link>
          </li>
        ))}
      </ul>
      <Route path="/:id">
        <CardView cards={cards} />
      </Route>
    </>
  );
}
