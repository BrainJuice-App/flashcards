import React from 'react';
import styles from './Card.css';
import '../components/Card.css';
import './Card.css';

export default function Card() {
  return (
    <>
      <h2>Card</h2>
      <div className={styles.card}>
        <div className={styles.card_inner}>
          <div className={(styles.card_face, styles.card_faceFront)}>
            <h2>Card Front</h2>
          </div>
          <div classNames={(styles.card_face, styles.card_faceBack)}>
            <div className={styles.card_content}>
              <div className={styles.card_header}>
                <img
                  src="../../public/card.jpeg"
                  alt=""
                  className={styles.pp}
                />
                <h2>Question</h2>
              </div>
              <div className={styles.card_body}>
                <h3>Answer</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

    // <>
    //   <h2>Card</h2>
    //   <div className="card">
    //     <div className="card_inner">
    //       <div className="card_face card_face--front">
    //         <h2>Card Front</h2>
    //       </div>
    //       <div className="card_face card_face--front">
    //         <div className="card_face card_face--back">
    //           <div className="card_content">
    //             <img src="../../public/card.jpeg" alt="" className="pp" />
    //             <h2>Question</h2>
    //           </div>
    //           <div className="card_body">
    //             <h3>Answer</h3>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
