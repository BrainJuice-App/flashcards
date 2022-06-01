import { React } from 'react';
import { useUser } from '../context/UserContext';
import { useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
import styles from './Header.css';
import { GiBrain } from 'react-icons/gi';

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
      <div className={styles.header}>
        <h1 style={{ marginLeft: '35px' }}>
          BrainJuice <GiBrain size={42} />
        </h1>

        <div>
          <Button
            variant="outlined"
            sx={{
              color: 'red',
              backgroundColor: '#1826d2',
              borderColor: 'green',
              margin: '5px',
              marginLeft: '35px',
            }}
            onClick={handleHomeButton}
          >
            Home
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'red',
              backgroundColor: '#1826d2',
              borderColor: 'green',
            }}
            onClick={redirectToProfile}
          >
            Profile
          </Button>
          <Button
            variant="outlined"
            sx={{
              color: 'red',
              backgroundColor: '#1826d2',
              borderColor: 'green',
              margin: '5px',
            }}
            onClick={redirectToCreateCard}
          >
            Create Card
          </Button>
          {user ? (
            <Button
              variant="outlined"
              sx={{
                color: 'red',
                backgroundColor: '#1826d2',
                borderColor: 'green',
                margin: '5px',
              }}
              onClick={() => handleLogout()}
            >
              Logout Button
            </Button>
          ) : (
            <Button
              variant="outlined"
              sx={{
                color: 'red',
                backgroundColor: '#1826d2',
                borderColor: 'green',
                margin: '5px',
              }}
              onClick={() => handleRedirect()}
            >
              Signin/Signup Button
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
