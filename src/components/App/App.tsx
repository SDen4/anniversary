import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import Album from '../Album';
import Main from '../Main';
import Soundfy from '../Soundfy';

import styles from './App.module.css';

// const audioTrack = require('../../audio/1.mp3');

const App = () => {
  const [isMain, setIsMain] = useState<boolean>(true);

  // const playAudio = () => {
  //   // @ts-ignore
  //   document.getElementById('audio').play();
  // };

  // useEffect(() => {
  //   playAudio();
  // }, []);

  const clickOnMainPage = () => {
    setIsMain(false);

    //   const sound = new Audio(audioTrack);
    //   sound.play();
  };

  const clickOnAlbumPage = () => {
    setIsMain(true);
  };

  return (
    <div className={clsx(styles.app, !isMain && styles.backOfAlbum)}>
      <Soundfy />

      {isMain ? (
        <Main clickOnMainPage={clickOnMainPage} />
      ) : (
        <Album clickOnAlbumPage={clickOnAlbumPage} />
      )}
    </div>
  );
};

export default App;
