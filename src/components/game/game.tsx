import React, { useState } from 'react';
import styles from './game.module.scss';
import { Merger } from '../merger/merger';
import { GameWrapper } from './gameWrapper';
import { GameActions } from './gameActions';

export const Game: React.FC = () => {
  const [eraId, setEraId] = useState<number>(1);

  return (
    <div className={styles.gameComponent}>
      <Merger />
      <GameWrapper eraId={eraId} />
      <GameActions eraId={eraId} setEraId={setEraId} />
    </div>
  );
};
