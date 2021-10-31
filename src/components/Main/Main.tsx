import React from 'react';

import styles from './Main.module.css';

import photo from '../../photos/4.jpg';

import { MainPageType } from './types';

const Main: React.FC<MainPageType> = ({ clickOnMainPage }) => {
  const onClickHandler = () => {
    clickOnMainPage();
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.appHeader}>
        Поздравляем с годовщиной свадьбы!
      </header>

      <div className={styles.imgWrapper} onClick={onClickHandler}>
        <img src={photo} alt="couple" />
        <div className={styles.pushNote}>Нажми на фото</div>
      </div>

      <footer className={styles.appHeader}>Маргарита и Геннадий</footer>
    </div>
  );
};

export default Main;
