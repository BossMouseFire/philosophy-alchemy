import React from 'react';
import styles from './game.module.scss';
import cn from 'classnames';
import { IGameActions } from './gameProps';

export const GameActions: React.FC<IGameActions> = ({ eraId, setEraId }) => {
  return (
    <div className={styles.actionsGame}>
      <div
        className={cn(styles.action, { [styles.actionGameActive]: eraId === 1 })}
        onClick={() => setEraId(1)}
      >
        <span>Античность</span>
        <div className={styles.firstAction} />
      </div>
      <div
        className={cn(styles.action, { [styles.actionGameActive]: eraId === 2 })}
        onClick={() => setEraId(2)}
      >
        <span>Средневековье</span>
        <div />
      </div>
      <div
        className={cn(styles.action, { [styles.actionGameActive]: eraId === 3 })}
        onClick={() => setEraId(3)}
      >
        <span>Возрождение</span>
        <div className={styles.lastAction} />
      </div>
    </div>
  );
};
