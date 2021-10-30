import React from 'react';

import { AlbumPageType } from './types';

import styles from './Album.module.css';

const Album: React.FC<AlbumPageType> = ({ clickOnAlbumPage }) => {
  const onButtonClick = () => {
    clickOnAlbumPage();
  };
  return (
    <div className={styles.wrapper}>
      Album
      <button onClick={onButtonClick} type="button">
        Назад
      </button>
    </div>
  );
};

export default Album;
