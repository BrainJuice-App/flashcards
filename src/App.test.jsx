import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import App from './App';

describe('App', () => {
  it('Should render list of cards', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getAllByText('Header for our APP');
  });
});
