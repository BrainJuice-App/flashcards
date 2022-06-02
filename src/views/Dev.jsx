import React from 'react';
import kamie from '../assets/kamie.jpeg';
import alex from '../assets/alex.jpeg';
import yovana from '../assets/yovana.jpeg';

import styles from '../views/Dev.css';

export default function Dev() {
  return (
    <div className={styles.dev}>
      <h1>Meet the Devs!</h1>

      <div>
        <br />
        <br />
        <h2>Kamie</h2>
        <p>Full Stack Software Engineer and I enjoy coding.</p>
        <div className={styles.imgBorder}>
          <a href="https://www.linkedin.com/in/kamieshort/">
            <img
              src={kamie}
              style={{
                height: '250px',
                // borderRadius: '8px',
                border: 'solid black',
              }}
            />
          </a>
        </div>
      </div>
      <br />
      <br />
      <div>
        <h2>Yovana</h2>
        <p>Full Stack Software Engineer and I enjoy coding.</p>
        <a href="https://www.linkedin.com/in/yovana-pelayo/">
          <img
            src={yovana}
            style={{
              height: '250px',
              borderRadius: '8px',
              border: 'solid black',
            }}
          />
        </a>
      </div>
      <br />
      <br />
      <div>
        <h2>Alex</h2>
        <p>Full Stack Software Engineer and I enjoy gardening and learning.</p>
        <a href="https://www.linkedin.com/in/alexorlet89/">
          <img
            src={alex}
            style={{
              height: '250px',
              borderRadius: '8px',
              border: 'solid black',
            }}
          />
        </a>
      </div>
    </div>
  );
}
