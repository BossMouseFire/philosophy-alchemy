import React, { useState } from 'react';
import styles from './game.module.scss';
import { Line } from '../line/line';
import { ElementGame } from '../elementGame/elementGame';
import DataService from '../../services/DataService';
import { ILinePos } from '../../types/data';
import { IGameWrapper } from './gameProps';
import { colors } from '../../constants';

export const GameWrapper: React.FC<IGameWrapper> = ({ eraId }) => {
  const [linesChildren, setLinesChildren] = useState<ILinePos[]>([]);
  const [linesParent, setLinesParent] = useState<ILinePos[]>([]);
  const era = DataService.getEraById(eraId);

  return (
    <div className={styles.gameWrapper}>
      <svg width={'100%'} height={'100%'}>
        {linesChildren.length &&
          linesChildren.map((line, index) => (
            <Line
              key={index}
              positionStart={line.positionStart}
              positionEnd={line.positionEnd}
              color={colors.childLine}
            />
          ))}
        {linesParent.length &&
          linesParent.map((line, index) => (
            <Line
              key={index}
              positionStart={line.positionStart}
              positionEnd={line.positionEnd}
              color={colors.parentLine}
            />
          ))}
        {era?.elements.map(
          (element) =>
            element.enabled && (
              <ElementGame
                key={element.id}
                eraId={eraId}
                element={element}
                colorStroke={colors.element}
                setLinesChildren={setLinesChildren}
                setLinesParent={setLinesParent}
              />
            )
        )}
      </svg>
    </div>
  );
};
