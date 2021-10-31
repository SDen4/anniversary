import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import ReactAudioPlayer from 'react-audio-player';

import Album from '../Album';
import Main from '../Main';

import styles from './App.module.css';

//@ts-ignore
import track from '../../audio/1.mp3';

const App = () => {
  const [isMain, setIsMain] = useState<boolean>(true);

  const player: any = useRef();

  const clickOnMainPage = () => {
    setIsMain(false);
  };

  const clickOnAlbumPage = () => {
    setIsMain(true);
  };

  window.addEventListener('click', () => {
    player.current?.audioEl.current.play();
  });
  window.removeEventListener('click', () => {
    player.current?.audioEl.current.play();
  });

  return (
    <div className={clsx(styles.app, !isMain && styles.backOfAlbum)}>
      <div className={styles.playerWrapper}>
        <ReactAudioPlayer
          src={track}
          controls
          autoPlay
          loop
          className={styles.player}
          ref={player}
        />
      </div>

      {isMain ? (
        <Main clickOnMainPage={clickOnMainPage} />
      ) : (
        <Album clickOnAlbumPage={clickOnAlbumPage} />
      )}
    </div>
  );
};

export default App;
