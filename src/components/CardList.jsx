import { useEffect } from 'react';
import { useRouteMatch, Link, Route } from 'react-router-dom';
import { useCard } from '../context/cardsContext/cardsContext';
import { getCards } from '../services/cards';
import CardView from '../views/CardView';

export default function CardList() {
  const { url, path } = useRouteMatch();
  console.log('url, path', url, path);
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
            <Link to={`/cardList/${card.id}`}>{card.name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${path}/:id`}>
        <CardView cards={cards} />
      </Route>
    </>
  );
}
