import React from 'react';
import kamieSnow from '../assets/kamieSnow.jpeg';
import styles from '../views/Dev.css';

export default function Dev() {
  return (
    <div className={styles.dev}>
      <h1>Meet the Devs!</h1>

      <div>
        <br />
        <br />
        <h2>Alex</h2>
        <p>
          Full Stack Software Engineer and I enjoy creating fun learning
          environments.
        </p>
        <a href="https://www.linkedin.com/in/kamieshort/">
          <img
            src={kamieSnow}
            style={{ height: '150px', borderRadius: '8px' }}
          />
        </a>
      </div>
      <br />
      <br />
      <div>
        <h2>Yovana</h2>
        <p>
          Full Stack Software Engineer and I enjoy creating fun learning
          environments.
        </p>
        <a href="https://www.linkedin.com/in/kamieshort/">
          <img
            src={kamieSnow}
            style={{ height: '150px', borderRadius: '8px' }}
          />
        </a>
      </div>
      <br />
      <br />
      <div>
        <h2>Kamie</h2>
        <p>
          Full Stack Software Engineer and I enjoy creating fun learning
          environments.
        </p>
        <a href="https://www.linkedin.com/in/kamieshort/">
          <img
            src={kamieSnow}
            style={{ height: '150px', borderRadius: '8px' }}
          />
        </a>
      </div>
    </div>
  );
}
