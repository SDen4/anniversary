import React, { useEffect, useState } from 'react';
import clsx from 'clsx';

import { AlbumPageType } from './types';

import photo1 from '../../photos/0MOGqaWRDUE.jpg';
import photo2 from '../../photos/28fe434ff72d44409b55d260ac456620.jpeg';
import photo3 from '../../photos/779c0c546ef94e5c98d44633ea435390.jpeg';
import photo4 from '../../photos/9538cdaf2e814bb7ab3e2f88712ff1bb.jpeg';
import photo5 from '../../photos/5316876ec66548a0aa2d7d42f258b392.jpeg';
import photo6 from '../../photos/alkdjshf.jpg';
import photo7 from '../../photos/askjdhfg.jpg';
import photo8 from '../../photos/cd1767d4868b454894051910cfdc19ee.jpeg';
import photo9 from '../../photos/djskfhjsdh.jpg';
import photo10 from '../../photos/dsakfljsdf.jpg';
import photo11 from '../../photos/IMG6680.jpg';
import photo12 from '../../photos/IMG6719.jpg';
import photo13 from '../../photos/IMG6720.jpg';
import photo14 from '../../photos/IMG6764.jpg';
import photo15 from '../../photos/IMG6765.jpg';
import photo16 from '../../photos/IMG6766.jpg';
import photo17 from '../../photos/IMG6779.jpg';
import photo18 from '../../photos/IMG8291.jpg';
import photo19 from '../../photos/IMG8296.jpg';
import photo20 from '../../photos/IMG20180105175503.jpg';
import photo21 from '../../photos/kasdfjh.jpg';
import photo22 from '../../photos/sdkljfh.jpg';
import photo23 from '../../photos/szkdjfhhds.jpg';
import photo24 from '../../photos/97.jpg';
import photo25 from '../../photos/98.jpg';

import styles from './Album.module.css';

const Album: React.FC<AlbumPageType> = ({ clickOnAlbumPage }) => {
  const onButtonClick = () => {
    clickOnAlbumPage();
  };

  const photosArr = [
    photo4,
    photo3,
    photo1,
    photo5,
    photo25,
    photo6,
    photo8,
    photo9,
    photo10,
    photo11,
    photo12,
    photo13,
    photo14,
    photo15,
    photo16,
    photo17,
    photo18,
    photo19,
    photo20,
    photo21,
    photo23,
    photo22,
    photo2,
    photo24,
    photo7,
  ];

  const [count, setCount] = useState<number>(0);
  const [newPhotoArr, setNewPhotoArr] = useState<any>(photosArr[0]);

  useEffect(() => {
    if (count < 25) {
      let timeout = setTimeout(() => {
        setCount(count + 1);
        setNewPhotoArr([...newPhotoArr, photosArr[count + 1]]);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [count, newPhotoArr, photosArr]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.contentWrapper}>
        {photosArr.slice(0, count).map((el: any, i) => {
          console.log(i);
          return (
            <div
              className={clsx(
                styles.photoWrapper,
                i % 8 === 0 && styles.position1,
                i % 8 === 1 && styles.position2,
                i % 8 === 2 && styles.position3,
                i % 8 === 3 && styles.position4,
                i % 8 === 4 && styles.position5,
                i % 8 === 5 && styles.position6,
                i % 8 === 6 && styles.position7,
                i % 8 === 7 && styles.position8,
              )}
              key={el}
            >
              <img src={el} alt="the_new_photo" />
            </div>
          );
        })}
      </div>
      <div className={styles.buttonWrapper}>
        <button onClick={onButtonClick} type="button" className={styles.button}>
          На главную
        </button>
      </div>
    </div>
  );
};

export default Album;
