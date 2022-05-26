import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../context/UserContext';

export default function Profile() {
  const history = useHistory();
  const { user } = useUser();

  const handleEditButtonClick = () => {
    history.push(`/profile/${user.id}/edit`);
  };

  return (
    <>
      <div>{user.email}'s Profile</div>
      <button onClick={handleEditButtonClick}>Edit</button>
    </>
  );
}
