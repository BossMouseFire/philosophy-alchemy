import { IPosition } from './types/data';
import { radius } from './constants';

export const changeCoordinates = (
  positionStart: IPosition,
  positionEnd: IPosition,
  average: number
): IPosition[] => {
  const positionStartNew = positionStart;
  const positionEndNew = positionEnd;

  const { game } = radius;

  const hypotenuse = Math.sqrt(
    Math.pow(positionEnd.x - positionStart.x, 2) + Math.pow(positionEnd.y - positionStart.y, 2)
  );
  const legB = ((positionEnd.x - positionStart.x) * game * average) / hypotenuse;
  const legA = ((positionEnd.y - positionStart.y) * game * average) / hypotenuse;

  positionStartNew.x += legB;
  positionStartNew.y += legA;

  positionEndNew.x -= legB;
  positionEndNew.y -= legA;

  return [positionStartNew, positionEndNew];
};
