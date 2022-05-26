import { createContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState('');
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [review, setReview] = useState('');

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        name,
        setName,
        content,
        setContent,
        review,
        setReview,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
