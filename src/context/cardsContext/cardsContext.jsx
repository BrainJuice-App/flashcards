import { createContext, useContext, useState } from 'react';
export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState({});
  const [name, setName] = useState('');
  const [creator, setCreator] = useState('');
  const [content, setContent] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(true);
  const [card, setCard] = useState({});
  const [error, setError] = useState('');

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        name,
        setName,
        content,
        setContent,
        creator,
        setCreator,
        review,
        setReview,
        loading,
        setLoading,
        error,
        setError,
        card,
        setCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
export const useCard = () => {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a User Provider');
  }
  return context;
};
