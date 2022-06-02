import React, { useState } from 'react';
import styles from './Card.css';
import '../components/Card.css';
import './Card.css';

export default function Card({ card }) {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <div
        className={styles.card}
        aria-label="questionCards"
        placeholder="questionCards"
      >
        <div
          className={isActive ? styles.card_inner : styles.card_inner.isFlipped}
        >
          <div className={(styles.card_face, styles.card_faceFront)}>
            <h2 aria-label="question" onClick={() => setActive(!isActive)}>
              {card.name}
            </h2>
          </div>
          <div className={(styles.card_face, styles.card_faceBack)}>
            <div className={styles.card_content}>
              <div className={styles.card_body}>
                <h2 onClick={() => setActive(!isActive)}>{card.content}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
