import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import App from './App';
import { mockProfile, mockUser } from './utils/data';
import { UserProvider } from './context/UserContext';
import { ProfileProvider } from './context/ProfileContext';
import { CardProvider } from './context/cardsContext/cardsContext';

jest.mock('react-hot-toast');

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
];

const server = setupServer(
  rest.post(
    `https://brkitplnwnixzvunfbfa.supabase.co/auth/v1/signup`,
    (req, res, ctx) => {
      return res(ctx.json(mockUser));
    }
  ),
  // rest.options(
  //   `https://brkitplnwnixzvunfbfa.supabase.co/auth/v1/signup`,
  //   (req, res, ctx) => {
  //     return res(ctx.json(mockUser));
  //   }
  // ),
  rest.post(
    `https://brkitplnwnixzvunfbfa.supabase.co/rest/v1/profile`,
    (req, res, ctx) => {
      return res(ctx.json(mockProfile));
    }
  ),
  // rest.options(
  //   `https://brkitplnwnixzvunfbfa.supabase.co/rest/v1/profile`,
  //   (req, res, ctx) => {
  //     return res(ctx.json(mockProfile));
  //   }
  // ),
  rest.get(
    `https://brkitplnwnixzvunfbfa.supabase.co/rest/v1/cards`,
    (req, res, ctx) => {
      return res(ctx.json(results));
    }
  )
  // rest.get(`https://brkitplnwnixzvunfbfa.supabase.co/`, (req, res, ctx) => {
  //   res(ctx.json(results));
  // })
);

beforeAll(() => server.listen());

afterAll(() => server.close());

describe('App', () => {
  it.skip('Should render list of 8 cards', async () => {
    // server.use();
    const app = render(
      <CardProvider>
        <UserProvider>
          <ProfileProvider>
            <MemoryRouter>
              <App />
            </MemoryRouter>
          </ProfileProvider>
        </UserProvider>
      </CardProvider>
    );
    const BrainJuice = await screen.findByText('BrainJuice');

    expect(BrainJuice).toBeInTheDocument();

    const signup = await screen.findByText(/sign up/i);
    userEvent.click(signup);
    const email = screen.getByRole('textbox', { name: /email address/i });
    const password = screen.getByPlaceholderText('password');
    userEvent.type(email, 'test@user.com');
    userEvent.type(password, 'password');
    const button = screen.getByRole('button', { name: /sign up/i });
    // expect(app).toMatchSnapshot();
    // screen.debug();
    userEvent.click(button);

    const welcome = await screen.findByText(
      /If you re-declare a variable without a value, will it lose its current value? Yes or No?/i,
      { exact: false }
    );
    expect(welcome).toBeInTheDocument();

    // const question = await screen.findByRole(
    //   'heading',
    //   { name: /question/i },
    //   { timeout: 4000 }
    // );
    // // const loading = await screen.findByText(/loading/i);

    // expect(question).toBeInTheDocument();
  });
});
