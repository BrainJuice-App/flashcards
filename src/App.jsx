import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

import Auth from './views/Auth';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import CardList from './components/CardList';
import Profile from './views/Profile';
import ProfileEdit from './views/ProfileEdit';
import { ProfileProvider } from './context/ProfileContext';
import CreateCard from './views/CreateCard';
import UserCards from './components/UserCards';
import CardView from './views/CardView';
import Home from './views/Home';

import CssBaseline from '@mui/material/CssBaseline';
import CardEdit from './views/CardEdit';

export default function App() {
  return (
    <>
      <div>
        <Toaster />
      </div>
      <CssBaseline />
      <UserProvider>
        <ProfileProvider>
          <Header />
          <Switch>
            <Route path="/auth">
              <Auth />
            </Route>
            <PrivateRoute exact path="/:id/cardView">
              <CardView />
            </PrivateRoute>
            <PrivateRoute exact path="/userCards">
              <UserCards />
            </PrivateRoute>
            <PrivateRoute exact path="/profile">
              <Profile />
            </PrivateRoute>
            <PrivateRoute exact path="/profile/:id/edit">
              <ProfileEdit />
            </PrivateRoute>
            <PrivateRoute exact path="/createCard">
              <CreateCard />
            </PrivateRoute>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </ProfileProvider>
      </UserProvider>
      <CssBaseline />
    </>
  );
}
