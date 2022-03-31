import React, { useState } from 'react';
import styles from './game.module.scss';
import { Merger } from '../merger/merger';
import { GameWrapper } from './gameWrapper';
import { GameActions } from './gameActions';
import { IGameProps } from './gameProps';

export const Game: React.FC<IGameProps> = ({ eraId, setEraId }) => {
  const [, setForceUpdate] = useState<boolean>(false);
  return (
    <div className={styles.gameComponent}>
      <Merger eraId={eraId} setForceUpdate={setForceUpdate} />
      <GameWrapper eraId={eraId} />
      <GameActions eraId={eraId} setEraId={setEraId} />
    </div>
  );
};
