import React from 'react';
import ReactDOM from 'react-dom';
import { GiBrain } from 'react-icons/gi';
import { useProfileContext } from '../context/ProfileContext';

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
  Grid,
} from '@mui/material';

const theme = createTheme();

export default function ProfileForm({ submitProfileHandler }) {
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    username,
    setUsername,

    bio,
    setBio,
  } = useProfileContext();
  return (
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

          <Typography component="h1" variant="h5"></Typography>
          <Box
            component="form"
            onSubmit={submitProfileHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="first_name"
              label="First Name"
              name="first_name"
              autoFocus
              sx={{
                textDecorationColor: 'red',
                backgroundColor: 'white',
                borderColor: 'green',
                color: 'red',
                borderRadius: '8px',
                fontFamily: 'Spline Sans Mono',
              }}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              id="last_name"
              label="Last Name"
              name="last_name"
              autoFocus
              sx={{
                textDecorationColor: 'red',
                backgroundColor: 'white',
                borderColor: 'green',
                color: 'red',
                borderRadius: '8px',
                fontFamily: 'Spline Sans Mono',
              }}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              id="user_name"
              label="Username"
              name="user_name"
              autoFocus
              sx={{
                textDecorationColor: 'red',
                backgroundColor: 'white',
                borderColor: 'green',
                color: 'red',
                borderRadius: '8px',
                fontFamily: 'Spline Sans Mono',
              }}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <Grid item xs={12}>
              <TextField
                margin="normal"
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                autoFocus
                sx={{
                  textDecorationColor: 'red',
                  backgroundColor: 'white',
                  borderColor: 'green',
                  color: 'red',
                  borderRadius: '8px',
                  fontFamily: 'Spline Sans Mono',
                }}
                value={bio}
                onChange={(e) => setBio(e.target.value)}
              />
            </Grid>

            <Button
              onClick={submitProfileHandler}
              variant="contained"
              style={{ margin: '20px' }}
            >
              Submit
            </Button>
            <Grid container>
              <Grid item xs></Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
