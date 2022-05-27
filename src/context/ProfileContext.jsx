import { createContext, useContext } from 'react';
import { useState } from 'react';

export const ProfileContext = createContext();

const ProfileProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [bio, setBio] = useState('');
  ///image///

  return (
    <ProfileContext.Provider
      value={{
        firstName,
        setFirstName,
        lastName,
        setLastName,
        username,
        setUsername,
        email,
        setEmail,
        bio,
        setBio,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

const useProfileContext = () => {
  const resp = useContext(ProfileContext);

  if (resp === undefined) {
    throw new Error('Error in ProfileContext.js');
  }
  return resp;
};

export { ProfileProvider, useProfileContext };
