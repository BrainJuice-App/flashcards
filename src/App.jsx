import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';
import Home from './views/Home';

import Auth from './views/Auth';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import Profile from './views/Profile';
import ProfileEdit from './views/ProfileEdit';
import { ProfileProvider } from './context/ProfileContext';

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
        <ProfileProvider>
          <Header />
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/profile/:id/edit">
              <ProfileEdit />
            </PrivateRoute>

            <Route path="/card-view/:id">
              <CardView />
            </Route>

            <PrivateRoute path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </ProfileProvider>
      </UserProvider>
      {/* <CssBaseline /> */}
    </>
  );
}
