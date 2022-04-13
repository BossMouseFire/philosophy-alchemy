import React, { useEffect, useRef } from 'react';
import { IPosition } from '../../types/data';
import styles from './line.module.scss';
interface ILine {
  positionStart: IPosition;
  positionEnd: IPosition;
  color: string;
}

export const Line: React.FC<ILine> = ({ positionStart, positionEnd, color }) => {
  const lineElement = useRef() as React.MutableRefObject<SVGLineElement>;

  useEffect(() => {
    lineElement.current.classList.add(styles.transformLine);
  }, []);

  return (
    <line
      className={styles.line}
      ref={lineElement}
      x1={positionStart.x}
      y1={positionStart.y}
      x2={positionEnd.x}
      y2={positionEnd.y}
      stroke={color}
    />
  );
};
