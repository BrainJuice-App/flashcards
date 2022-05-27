import React from 'react';
import { useState } from 'react';
import styles from './Auth.css';
import { toast } from 'react-hot-toast';
import { GiBrain } from 'react-icons/gi';

import { useUser } from '../context/UserContext';
import { useHistory } from 'react-router-dom';

import {
  Button,
  Box,
  createTheme,
  ThemeProvider,
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createProfile } from '../services/profile';

const theme = createTheme();

export default function Auth() {
  const { login, signup } = useUser();
  const history = useHistory();

  const [isSignUp, setIsSignUp] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const toggleAuth = () => {
    setIsSignUp(!isSignUp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isSignUp) {
        await signup(email, password);
      } else {
        await login(email, password);
      }

      history.push('/');
    } catch (error) {
      setError(error);
      console.log(error);
    }
    toast.success(`Welcome ${email}!`);
  };

  return (
    <>
      {error && <p>{`${error}`}</p>}
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <GiBrain />
            </Avatar>
            <Typography component="h1" variant="h5">
              <span
                className={`${styles['auth-toggle']} ${
                  isSignUp ? '' : styles.selected
                }`}
                onClick={toggleAuth}
              >
                Sign In
              </span>
              <span
                className={`${styles['auth-toggle']} ${
                  isSignUp ? styles.selected : ''
                }`}
                onClick={toggleAuth}
              >
                Sign Up
              </span>
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                onClick={handleSubmit}
                variant="contained"
                style={{ margin: '20px' }}
              >
                {isSignUp ? 'Sign up' : 'Sign in'}
              </Button>
              <Grid container>
                <Grid item xs></Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}
