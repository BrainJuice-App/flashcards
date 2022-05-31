import React, { useEffect } from 'react';
import {
  useHistory,
  useParams,
} from 'react-router-dom/cjs/react-router-dom.min';
import CardForm from '../components/CardForm';
import UserCards from '../components/UserCards';
import { useCard } from '../context/cardsContext/cardsContext';
import { getProfileCards, updateCards } from '../services/cards';
import { toast } from 'react-hot-toast';

export default function EditCard() {
  const history = useHistory();
  const { name, content } = useCard();
  const { id } = useParams();

  const submitCreateHandler = async (e) => {
    e.preventDefault();
    console.log('click', name, content);

    const update = {
      name: name,
      content: content,
      id: id,
    };
    await updateCards(update);
    history.push(`/profile/${id}`);
    toast.success('You have successfully updated a card!');
  };
  return (
    //createHandler function that will update instead of create a card, we will probably need id from params to update the correct row in supabase

    <>
      <div>EditCard</div>
      <CardForm submitCreateHandler={submitCreateHandler} />
    </>
  );
}
