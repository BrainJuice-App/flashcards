import { createContext, useContext, useState } from 'react';

export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const [cards, setCards] = useState({});
  const [name, setName] = useState('');
  const [content, setContent] = useState('');
  const [review, setReview] = useState('');
  const [loading, setLoading] = useState(true);
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
        loading,
        setLoading,
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
