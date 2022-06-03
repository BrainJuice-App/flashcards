import { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';
import { useCard } from '../context/cardsContext/cardsContext';
import { getCards } from '../services/cards';
import Card from './Card';
import styles from '../components/CardList.css';

export default function CardList({ newCards }) {
  const { cards, setCards, loading, setLoading } = useCard();

  let content = newCards.length ? newCards : cards;

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
      <div className={styles.cardList}>
        {content.slice(0, 8).map((card) => (
          <Card placeholder="card" key={card.id} card={card} />
        ))}
      </div>
      {/* <Route path="/:id">
        <CardView cards={cards} />
      </Route> */}
    </>
  );
}
