import { React } from 'react';
import { useUser } from '../context/UserContext';
import { useHistory, useLocation } from 'react-router-dom';

export default function Header() {
  const { user, logout } = useUser();
  const history = useHistory();

  const handleLogout = async () => {
    await logout();
  };

  const handleRedirect = () => {
    history.replace('/auth');
  };

  return (
    <>
      <div>
        <h1>Header for our APP</h1>
        <div>
          <div>
            <h4>{user ? user.email : 'Unregistered Guest'}</h4>
          </div>
          {user ? (
            <button onClick={() => handleLogout()}>Logout Button</button>
          ) : (
            <button onClick={() => handleRedirect()}>
              Signin/Signup Button
            </button>
          )}
        </div>
      </div>
      <hr />
    </>
  );
}
