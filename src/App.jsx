import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { UserProvider } from './context/UserContext';

import Auth from './views/Auth';
import Header from './components/Header';
import { Toaster } from 'react-hot-toast';
import Profile from './views/Profile';
import ProfileEdit from './views/ProfileEdit';
import { ProfileProvider } from './context/ProfileContext';
import CreateCard from './views/CreateCard';
import UserCards from './components/UserCards';
import CardView from './views/CardView';
import Home from './views/Home';

import CssBaseline from '@mui/material/CssBaseline';
import Card from './components/Card';
import EditCard from './views/EditCard';
import styles from './App.css';

export default function App() {
  return (
    <div className={styles.app}>
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
            <PrivateRoute exact path="/profile/:id">
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
            <PrivateRoute exact path="/profile/:id/editCard">
              <EditCard />
            </PrivateRoute>
            <Route exact path="/test">
              <Card />
            </Route>
            <PrivateRoute exact path="/">
              <Home />
            </PrivateRoute>
          </Switch>
        </ProfileProvider>
      </UserProvider>
      {/* <CssBaseline /> */}
    </div>
  );
}
