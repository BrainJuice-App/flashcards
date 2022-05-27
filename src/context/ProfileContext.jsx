import { createContext, useReducer } from 'react';

export const ProfileContext = createContext();

function profileReducer(profiles, action) {
  switch (action.type) {
    case 'GET_PROFILE':
      return action.payload;

    default:
      throw Error(`Unknown action: ${action.type}`);
  }
}

export const ProfileProvider = ({ children }) => {
  const [profiles, dispatch] = useReducer(profileReducer, []);

  return (
    <ProfileContext.Provider value={{ profiles, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};
