import React from 'react';
import styles from './game.module.scss';
import { Merger } from '../merger/merger';
import { GameWrapper } from './gameWrapper';
import { GameActions } from './gameActions';

interface IGame {
  eraId: number;
  setEraId: React.Dispatch<React.SetStateAction<number>>;
}

export const Game: React.FC<IGame> = ({ eraId, setEraId }) => {
  return (
    <div className={styles.gameComponent}>
      <Merger />
      <GameWrapper eraId={eraId} />
      <GameActions eraId={eraId} setEraId={setEraId} />
    </div>
  );
};
