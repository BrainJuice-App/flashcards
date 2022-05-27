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

  return (
    <>
      <div>
        <h1>Header for our APP</h1>
        <div>
          <div>
            <Link to="/profile">
              <h4>{user ? user.email : 'Unregistered Guest'}</h4>
            </Link>
          </div>
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
