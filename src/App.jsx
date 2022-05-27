import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

import Auth from './views/Auth';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import CardList from './components/CardList';
// import CssBaseline from '@mui/material/CssBaseline';

export default function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      {/* <CssBaseline /> */}
      <UserProvider>
        <Header />
        <Switch>
          {/* <Route path="/cardList">
            <CardList />
          </Route> */}
          <Route path="/auth">
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <CardList />
          </PrivateRoute>
        </Switch>
      </UserProvider>
      {/* <CssBaseline /> */}
    </>
  );
}
