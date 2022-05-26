import React from 'react';
import { render } from 'react-dom';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { CardProvider } from './context/cardsContext/cardsContext';

render(
  <React.StrictMode>
    <CardProvider>
      <Router>
        <App />
      </Router>
    </CardProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
