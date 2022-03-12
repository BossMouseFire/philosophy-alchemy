import React from 'react';
import { ICircleElement, ILinePos, IPosition } from '../../types/data';
import DataService from '../../services/DataService';
import styles from './circle.module.scss';

export const Circle: React.FC<ICircleElement> = ({
  colorStroke,
  position,
  childrenId,
  setListLines,
}) => {
  const changeCoordinatesNew = (positionStart: IPosition, positionEnd: IPosition): IPosition[] => {
    const positionStartNew = positionStart;
    const positionEndNew = positionEnd;
    const hypotenuse = Math.sqrt(
      Math.pow(positionEnd.x - positionStart.x, 2) + Math.pow(positionEnd.y - positionStart.y, 2)
    );
    const legB = ((positionEnd.x - positionStart.x) * 15) / hypotenuse;
    const legA = ((positionEnd.y - positionStart.y) * 15) / hypotenuse;
    positionStartNew.x += legB;
    positionStartNew.y += legA;

    positionEndNew.x -= legB;
    positionEndNew.y -= legA;

    return [positionStartNew, positionEndNew];
  };

  const onClickElement = () => {
    const result: ILinePos[] = [];
    console.log(childrenId);
    childrenId.map((id) => {
      const element = DataService.getElement(1, id);
      if (element) {
        const positionStart = JSON.parse(JSON.stringify(position));
        const positionEnd = JSON.parse(JSON.stringify(element.position));
        const [positionStartNew, positionEndNew] = changeCoordinatesNew(positionStart, positionEnd);
        console.log('координаты', positionStart, positionEnd);
        result.push({ positionStart: positionStartNew, positionEnd: positionEndNew });
      }
    });
    setListLines(result);
  };
  return (
    <circle
      className={styles.circle}
      r="15"
      cx={position.x}
      cy={position.y}
      stroke={colorStroke}
      onClick={onClickElement}
    />
  );
};
