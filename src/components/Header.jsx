import { React } from 'react';
import { useUser } from '../context/UserContext';
import { useHistory, Link } from 'react-router-dom';

export default function Header() {
  const { user, logout } = useUser();
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
  };
  const handleRedirect = () => {
    history.replace('/auth');
  };
  const handleHomeButton = () => {
    history.replace('/');
  };

  const redirectToCreateCard = () => {
    history.replace(`/createCard`);
  };
  const redirectToProfile = () => {
    history.replace(`/profile`);
  };

  return (
    <>
      <div>
        <h1>Header for our APP</h1>
        <div>
          <button onClick={redirectToProfile}>Profile</button>
          {user ? (
            <button onClick={() => handleLogout()}>Logout Button</button>
          ) : (
            <button onClick={() => handleRedirect()}>
              Signin/Signup Button
            </button>
          )}
          <button onClick={handleHomeButton}>Home</button>
          <button onClick={redirectToCreateCard}> Create Card</button>
        </div>
      </div>
      <hr />
    </>
  );
}
