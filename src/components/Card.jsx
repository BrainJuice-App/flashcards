import React from 'react';

export default function Card() {
  return (
    <>
      <h2>Card</h2>
      <div className="card">
        <div className="card_inner">
          <div className="card_face card_face--front"></div>
          <div className="card_face card_face--back"></div>
        </div>
      </div>
    </>
  );
}
