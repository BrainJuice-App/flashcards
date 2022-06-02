import { useCard } from '../context/cardsContext/cardsContext';
import { useUser } from '../context/UserContext';

/// returns cards belonging to user

export function profileCards() {
  const { user } = useUser();
  const { cards } = useCard();
  console.log(cards);

  if (!user) return null;
  if (!cards) return null;

  const cardsFilteredById = cards.filter((card) => card.id == user.id);
  return cardsFilteredById;
  console.log('cardsFilteredById', cardsFilteredById);
}

//returns cards belonging to user and null (aka developers cards)

export function homeCards() {
  //this here's a function that returns both our cards and the current users cards
  const { user } = useUser();
  const { cards } = useCard();

  if (!user) return null;
  if (!cards) return null;

  const cardsFilteredByIdAndNull = cards.filter(
    (card) => card.id == user.id || null
  );
  return cardsFilteredByIdAndNull;
}

//returns card by id only if user matches creator.

// export function getCardById
