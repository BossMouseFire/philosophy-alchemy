import React from 'react';
import { LayoutPage, Game } from '../../components';
import styles from './mainPage.module.scss';
import { History } from '../../components/history/history';

export const MainPage: React.FC = () => {
  return (
    <LayoutPage className={styles.mainPage}>
      <History />
      <Game />
    </LayoutPage>
  );
};
