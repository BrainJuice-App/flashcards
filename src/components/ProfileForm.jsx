import React from 'react';
import ReactDOM from 'react-dom';
import { GiBrain } from 'react-icons/gi';

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

export default function ProfileForm({ handleSubmit }) {
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
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              rows
              id="first_name"
              label="First Name"
              name="first_name"
              autoFocus
              value=""
              onChange={(e) => {}}
            />
            <TextField
              margin="normal"
              rows
              id="last_name"
              label="Last Name"
              name="last_name"
              autoFocus
              value=""
              onChange={(e) => {}}
            />
            <TextField
              margin="normal"
              rows
              id="user_name"
              label="Username"
              name="user_name"
              autoFocus
              value=""
              onChange={(e) => {}}
            />

            <TextField
              margin="normal"
              rows
              id="email"
              label="Email"
              name="Email"
              autoFocus
              value=""
              onChange={(e) => {}}
            />

            <Grid item xs={12}>
              <TextField
                margin="normal"
                fullWidth
                id="bio"
                label="Bio"
                name="bio"
                value=""
                onChange={(e) => {}}
              />
            </Grid>

            <Button
              onClick={handleSubmit}
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
