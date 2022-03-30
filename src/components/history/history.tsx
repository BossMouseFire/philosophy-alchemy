import React from 'react';
import styles from './history.module.scss';
import { Information } from '../information/information';
import { useGlobalContext } from '../../context';

export const History: React.FC = () => {
  const { history } = useGlobalContext();
  const { title, years, description } = history;

  return (
    <div className={styles.history}>
      <div className={styles.titleComponent}>
        <span>АЛХИМИЯ ФИЛОСОФИИ</span>
      </div>
      <Information title={title} years={years} description={description} />
      <div className={styles.actions}>
        <button>О проекте</button>
      </div>
    </div>
  );
};
