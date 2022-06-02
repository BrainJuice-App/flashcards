import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useCard } from '../context/cardsContext/cardsContext';
import { deleteCard, getProfileCards, updateCards } from '../services/cards';
import styles from './CardView.css';
export default function CardView() {
  const [isActive, setActive] = useState(false);
  const { id } = useParams();
  const { card, setCard, error, setError } = useCard();
  const history = useHistory();

  const handleDelete = async (e) => {
    const removeCard = await deleteCard(id);
    setCard(removeCard);
  };
  const handleEdit = () => {
    history.replace(`/profile/${id}/editCard`);
  };
  const handleBack = () => {
    history.replace(`/profile/`);
  };

  useEffect(() => {
    try {
      const getData = async () => {
        const cards = await getProfileCards();
        console.log(cards, id);
        const selectedCard = cards.find((card) => card.id === Number(id));
        setCard(selectedCard);
      };
      getData();
    } catch (error) {
      setError('unable to display user cards');
    }
  }, [id]);
  return (
    <div>
      <p>{error}</p>
      <div className={styles.card}>
        <div
          className={isActive ? styles.card_inner : styles.card_inner.isFlipped}
        >
          <div className={(styles.card_face, styles.card_faceFront)}>
            <h2 onClick={() => setActive(!isActive)}>{card.name}</h2>
          </div>
          <div className={(styles.card_face, styles.card_faceBack)}>
            <div className={styles.card_content}>
              <div className={styles.card_body}>
                <h2 onClick={() => setActive(!isActive)}>{card.content}</h2>
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleEdit}>edit card</button>
        <button onClick={handleDelete}>delete card</button>
        <button onClick={handleBack}>Back to Profile</button>
      </div>
    </div>
  );
}

//things to do here, back to profile button, redirect after delete button, fix edit button to render card form with card values.
