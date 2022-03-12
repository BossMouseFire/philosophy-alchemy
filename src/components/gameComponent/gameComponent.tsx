import React, { useState } from 'react';
import styles from '../../pages/mainPage/mainPage.module.scss';
import DataService from '../../services/DataService';
import { Circle } from '../circle/circle';
import { Line } from '../line/line';
import { ILinePos } from '../../types/data';

export const GameComponent: React.FC = () => {
  const [listLines, setListLines] = useState<ILinePos[]>([]);
  const era = DataService.getEraById(1);
  return (
    <div className={styles.gameComponent}>
      <div>
        <svg viewBox={'0 0 500 500'} id={'game'} width={'500'} height={'500'}>
          {listLines.length &&
            listLines.map((line, index) => (
              <Line
                key={index}
                positionStart={line.positionStart}
                positionEnd={line.positionEnd}
                color={'#CF0070'}
              />
            ))}
          {era?.elements.map((element) => (
            <Circle
              key={element.id}
              id={element.id}
              colorStroke={'#FAFF00'}
              icon={element.icon}
              childrenId={element.childrenId}
              status={element.status}
              position={element.position}
              setListLines={setListLines}
            />
          ))}
        </svg>
      </div>
      <div className={styles.actionsGame}>
        <div className={styles.action}>
          <span>Античность</span>
          <div className={styles.firstAction} />
        </div>
        <div className={styles.action}>
          <span>Средневековье</span>
          <div />
        </div>
        <div className={styles.action}>
          <span>Возрождение</span>
          <div className={styles.lastAction} />
        </div>
      </div>
    </div>
  );
};
