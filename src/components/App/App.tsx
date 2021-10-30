import React, { useState } from 'react';
import clsx from 'clsx';

import Album from '../Album';
import Main from '../Main';
import styles from './App.module.css';

const App = () => {
  const [isMain, setIsMain] = useState<boolean>(true);

  const clickOnMainPage = () => {
    setIsMain(false);
  };

  const clickOnAlbumPage = () => {
    setIsMain(true);
  };

  return (
    <div className={clsx(styles.app, !isMain && styles.backOfAlbum)}>
      {isMain ? (
        <Main clickOnMainPage={clickOnMainPage} />
      ) : (
        <Album clickOnAlbumPage={clickOnAlbumPage} />
      )}
    </div>
  );
};

export default App;
