import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import App from './App';

const results = [
  {
    id: 31,
    created_at: '2022-05-31T23:21:04+00:00',
    name: 'Which method allows you to access an HTML element from JavaScript?',
    content: 'getElementById',
    creator: null,
  },
  {
    id: 32,
    created_at: '2022-05-31T23:27:14+00:00',
    name: 'What are groups of javascript statements\tcalled?',
    content: 'BLOCKS, baby!',
    creator: null,
  },
  {
    id: 35,
    created_at: '2022-05-31T23:32:08+00:00',
    name: 'What is used to assign a value to a variable?',
    content: '=',
    creator: null,
  },
  {
    id: 33,
    created_at: '2022-05-31T23:28:35+00:00',
    name: 'A text value is called a _?',
    content: 'String ',
    creator: null,
  },
  {
    id: 34,
    created_at: '2022-05-31T23:29:41+00:00',
    name: 'When you assign a text value to a variable, but _ around the value.\t',
    content: 'double or single quotes\n',
    creator: null,
  },
  {
    id: 36,
    created_at: '2022-05-31T23:43:10+00:00',
    name: 'According to good programming practice, where should all variables be declared?',
    content: 'In one place at the beginning of your code.\n',
    creator: null,
  },
  {
    id: 37,
    created_at: '2022-05-31T23:44:10+00:00',
    name: '\tIf you declare a variable without a value, what happens?',
    content: 'The variable will have the value - undefined\n',
    creator: null,
  },
  {
    id: 38,
    created_at: '2022-05-31T23:44:36+00:00',
    name: 'If you re-declare a variable without a value, will it lose its current value? Yes or No?',
    content: 'No',
    creator: null,
  },
  {
    id: 39,
    created_at: '2022-05-31T23:45:54+00:00',
    name: 'What is the rule for using quotes inside a string?',
    content:
      "You can use quotes inside a string, as long as they don't match the quotes surrounding the string.\n",
    creator: null,
  },
];

const server = setupServer(
  rest.get(`https://brkitplnwnixzvunfbfa.supabase.co/`, (req, res, ctx) => {
    res(ctx.json(results));
  })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

describe('App', () => {
  it('Should render list of 8 cards', async () => {
    server.use(
      rest.get(
        `https://brkitplnwnixzvunfbfa.supabase.co/rest/v1/cards?select=*`,
        (req, res, ctx) => {
          return res(ctx.json([results]));
        }
      )
    );

    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const BrainJuice = await screen.findByText('BrainJuice');

    expect(BrainJuice).toBeInTheDocument();

    // await screen.findByText(/loading/i);

    const question = await screen.findByRole('heading', { name: /question/i });
    screen.debug();
    // expect(question).toBeInTheDocument();
  });
});
