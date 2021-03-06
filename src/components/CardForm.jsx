import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { GiBrain } from 'react-icons/gi';
import { useCard } from '../context/cardsContext/cardsContext';

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
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getProfileCards } from '../services/cards';

const theme = createTheme();

export default function CardForm({ submitCreateHandler }) {
  const { name, content, creator, setName, setContent, setCreator } = useCard();

  const { id } = useParams();

  if (id) {
    useEffect(() => {
      const getData = async () => {
        const cards = await getProfileCards();
        const selectedCard = cards.find((card) => card.id === Number(id));
        setContent(selectedCard.content);
        setName(selectedCard.name);
      };
      getData();
    }, []);
  }

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
          <Avatar sx={{ m: 2, bgcolor: '#1826d2' }}>
            <GiBrain size={42} />
          </Avatar>

          <Typography component="h1" variant="h5"></Typography>
          <Box
            component="form"
            onSubmit={submitCreateHandler}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              fullWidth
              id="name"
              label="Question"
              name="name"
              autoFocus
              sx={{
                textDecorationColor: 'red',
                backgroundColor: 'white',
                borderColor: 'green',
                color: 'red',
                borderRadius: '8px',
                fontFamily: 'Spline Sans Mono',
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              id="content"
              label="Answer"
              name="name"
              autoFocus
              sx={{
                textDecorationColor: 'red',
                backgroundColor: 'white',
                borderColor: 'green',
                color: 'red',
                borderRadius: '8px',
                fontFamily: 'Spline Sans Mono',
              }}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
            {/* <TextField
              margin="normal"
              fullWidth
              id="creator"
              label="Username"
              name="creator"
              autoFocus
              value={creator}
              onChange={(e) => setCreator(e.target.value)}
            /> */}

            <Button
              onClick={submitCreateHandler}
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
