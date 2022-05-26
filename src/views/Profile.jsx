import React from 'react';
import { useUser } from '../context/UserContext';

export default function Profile() {
  const { user } = useUser();

  return <div>{user.email}'s Profile</div>;
}
