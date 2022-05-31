import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useCard } from '../context/cardsContext/cardsContext';
import { deleteCard, getProfileCards, updateCards } from '../services/cards';

export default function CardView() {
  // console.log('cards', cards);
  const { id } = useParams();
  const { card, setCard, error, setError } = useCard();

  const handleDelete = async (e) => {
    const removeCard = await deleteCard(id);
    setCard(removeCard);
  };
  const handleEdit = async (e) => {
    const edit = await updateCards(id);
    setCard(edit);
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
      {/* <p key={card.id}>{card.name}</p>
      <p key={card.id}>{card.content}</p> */}
      <button onClick={handleEdit}>edit card</button>
      <button onClick={handleDelete}>delete card</button>
    </div>
  );
}

//things to do here, back to profile button, redirect after delete button, fix edit button to render card form with card values.
