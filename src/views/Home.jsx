import React from 'react';
import CardList from '../components/CardList';
import { GiBrain } from 'react-icons/gi';

export default function Home() {
  return (
    <div>
      Home
      <CardList />
      <h3>
        <GiBrain />
      </h3>
    </div>
  );
}
