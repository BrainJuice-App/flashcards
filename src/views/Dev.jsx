import React from 'react';
import kamie from '../assets/kamie.jpeg';
import styles from '../views/Dev.css';

export default function Dev() {
  return (
    <div className={styles.dev}>
      <h1>Meet the Devs!</h1>

      <div>
        <br />
        <br />
        <h2>Alex</h2>
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
        <h2>Kamie</h2>
        <p>Full Stack Software Engineer and I enjoy gardening and learning.</p>
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
    </div>
  );
}
