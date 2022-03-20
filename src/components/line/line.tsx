import React from 'react';
import { IPosition } from '../../types/data';

interface ILine {
  positionStart: IPosition;
  positionEnd: IPosition;
  color: string;
}

export const Line: React.FC<ILine> = ({ positionStart, positionEnd, color }) => {
  return (
    <line
      x1={positionStart.x}
      y1={positionStart.y}
      x2={positionEnd.x}
      y2={positionEnd.y}
      stroke={color}
    />
  );
};
