import React from 'react';
import styles from './game.module.scss';
import cn from 'classnames';
import { IGameActions } from './gameProps';
import { useGlobalContext } from '../../context';

export const GameActions: React.FC<IGameActions> = ({ eraId, setEraId }) => {
  const { setElements } = useGlobalContext();

  const onChangeEra = (eraId: number) => {
    setElements([]);
    setEraId(eraId);
  };
  return (
    <div className={styles.actionsGame}>
      <div
        className={cn(styles.action, { [styles.actionGameActive]: eraId === 0 })}
        onClick={() => onChangeEra(0)}
      >
        <span>Античность</span>
        <div className={styles.firstAction} />
      </div>
      <div
        className={cn(styles.action, { [styles.actionGameActive]: eraId === 1 })}
        onClick={() => onChangeEra(1)}
      >
        <span>Средневековье</span>
        <div />
      </div>
      <div
        className={cn(styles.action, { [styles.actionGameActive]: eraId === 2 })}
        onClick={() => onChangeEra(2)}
      >
        <span>Возрождение</span>
        <div className={styles.lastAction} />
      </div>
    </div>
  );
};
