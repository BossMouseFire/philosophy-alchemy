import React from 'react';
import { LayoutPage } from '../../components';
import styles from './mainPage.module.scss';

export const MainPage: React.FC = () => {
  console.log('ff');
  return (
    <LayoutPage className={styles.mainPage}>
      <div className={styles.info}>
        <span className={styles.title}>Алхимия философии</span>
      </div>
      <div>test</div>
    </LayoutPage>
  );
};
