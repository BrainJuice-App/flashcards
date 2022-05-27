import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Home from './views/Home';

import Auth from './views/Auth';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import CardView from './views/CardView';
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
          <Route path="/card-view/:id">
            <CardView />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </UserProvider>
      {/* <CssBaseline /> */}
    </>
  );
}
