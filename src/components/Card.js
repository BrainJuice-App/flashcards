import React, { useState } from 'react';
import styles from './Card.css';
import '../components/Card.css';
import './Card.css';

export default function Card() {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <h2>Card</h2>

      <div className={styles.card}>
        <div
          className={isActive ? styles.card_inner : styles.card_inner.isFlipped}
        >
          <div className={(styles.card_face, styles.card_faceFront)}>
            <h2 onClick={() => setActive(!isActive)}>Question</h2>
          </div>
          <div className={(styles.card_face, styles.card_faceBack)}>
            <div className={styles.card_content}>
              <div className={styles.card_body}>
                <h2 onClick={() => setActive(!isActive)}>Answer</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
