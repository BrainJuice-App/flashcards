import React from 'react';

import { useCard } from '../context/cardsContext/cardsContext';

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import CardForm from '../components/CardForm';
import { toast } from 'react-hot-toast';
import { createCard } from '../services/cards';
import { useUser } from '../context/UserContext';
import { useProfileContext } from '../context/ProfileContext';
import styles from './CreateCard.css';
export default function CreateCard() {
  const { name, content } = useCard();
  // const { id } = useProfileContext();
  const { user } = useUser();

  const history = useHistory();

  const submitCreateHandler = async (e) => {
    e.preventDefault();

    const create = {
      // id: user.id,
      name: name,
      content: content,
      creator: user.id,
    };
    await createCard(create);
    history.push('/');
    toast.success('You have successfully created a card!');
  };

  return (
    <div className={styles.create}>
      <h2>Create your own study card</h2>
      <div className={styles.form}>
        <CardForm submitCreateHandler={submitCreateHandler} />
      </div>
    </div>
  );
}
