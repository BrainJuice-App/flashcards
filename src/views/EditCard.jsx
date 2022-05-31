import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CardForm from '../components/CardForm';
import { getProfileCards } from '../services/cards';

export default function EditCard() {
  const submitCreateHandler = () => {
    console.log('click');
  };
  return (
    //createHandler function that will update instead of create a card, we will probably need id from params to update the correct row in supabase

    <>
      <div>EditCard</div>
      <CardForm submitCreateHandler={submitCreateHandler} />
    </>
  );
}
