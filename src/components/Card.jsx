import React from 'react';
import './Card.css';
export default function Card() {
  return (
    <>
      <h2>Card</h2>
      <div className="card">
        <div className="card_inner">
          <div className="card_face card_face--front">
            <h2>Card Front</h2>
          </div>
          <div className="card_face card_face--back">
            <div className="card_content">
              <div className="card_header">
                <img src="card.jpeg" alt="" className="pp" />
                <h2>Question</h2>
              </div>
              <div className="card_body">
                <h3>Answer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
