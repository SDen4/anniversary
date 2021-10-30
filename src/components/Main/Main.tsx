import React from 'react';

import styles from './Main.module.css';

import photo from '../../photos/dsakfljsdf.jpg';

const Main: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.appHeader}>
        Поздравляем с годовщиной свадьбы!
      </header>

      <div className={styles.imgWrapper}>
        <img src={photo} alt="couple" />
      </div>

      <footer className={styles.appHeader}>Маргарита и Геннадий</footer>
    </div>
  );
};

export default Main;
