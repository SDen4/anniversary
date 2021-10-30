import React, { useState } from 'react';
import Album from '../Album';
import Main from '../Main';
import styles from './App.module.css';

const App = () => {
  const [isMain, setIsMain] = useState<boolean>(true);

  return <div className={styles.app}>{isMain ? <Main /> : <Album />}</div>;
};

export default App;
