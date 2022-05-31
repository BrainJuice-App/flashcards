import { useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import { useCard } from '../context/cardsContext/cardsContext';
import { getProfileCards } from '../services/cards';
import CardView from '../views/CardView';

export default function UserCards() {
  const { cards, setCards, loading, setLoading } = useCard();

  useEffect(() => {
    const getData = async () => {
      const data = await getProfileCards();
      setCards(data);
      console.log('cardata', data);
      setLoading(false);
    };
    getData();
  }, []);
  if (loading) return <div>loading</div>;

  return (
    <>
      <h2> Cards Created by owner</h2>
      <ul>
        {cards.map((card) => (
          <li key={card.id}>
            <Link to={`/${card.id}/cardView`}>{card.name}</Link>
          </li>
        ))}
      </ul>

      <Route path="/cardView">
        <CardView cards={cards} />
      </Route>
    </>
  );
}
