import React from 'react';
import { ILinePos, IPosition } from '../../types/data';
import DataService from '../../services/DataService';
import { changeCoordinates } from '../../utilities';
import { IElementGame } from './elementGameProps';
import { Element } from '../element/element';
import { useGlobalContext } from '../../context';
import { radius, sizeImage, urlImages } from '../../constants';

export const ElementGame: React.FC<IElementGame> = ({
  element,
  colorStroke,
  eraId,
  setLinesChildren,
  setLinesParent,
  ratioWidth,
  ratioHeight,
}) => {
  const { posX, posY, name, children, parents, icon } = element;
  const { elements, setElements } = useGlobalContext();

  const getLinesArray = (arrayIds: number[]) => {
    const result: ILinePos[] = [];
    arrayIds.map((id) => {
      const element = DataService.getElement(eraId, id);
      if (element && element.enabled) {
        const positionStart = Object.assign({
          x: posX,
          y: posY,
        } as IPosition);
        positionStart.x *= ratioWidth;
        positionStart.y *= ratioHeight;

        const positionEnd = Object.assign({
          x: element.posX,
          y: element.posY,
        } as IPosition);
        positionEnd.x *= ratioWidth;
        positionEnd.y *= ratioHeight;

        const average = (ratioHeight + ratioWidth) / 2;
        const [positionStartNew, positionEndNew] = changeCoordinates(
          positionStart,
          positionEnd,
          average
        );
        result.push({ positionStart: positionStartNew, positionEnd: positionEndNew });
      }
    });
    return result;
  };

  const addLinesOfElements = () => {
    setLinesChildren(getLinesArray(children));
    setLinesParent(getLinesArray(parents));
  };

  const clearLines = () => {
    setLinesParent([]);
    setLinesChildren([]);
  };

  const addElementToMerger = () => {
    setElements(() => [...elements, element]);
  };

  return (
    <Element
      name={name}
      position={{ x: posX, y: posY } as IPosition}
      colorStroke={colorStroke}
      radius={radius.game}
      sizeImage={sizeImage.game}
      imageHref={urlImages + icon}
      isText={true}
      ratioHeight={ratioHeight}
      ratioWidth={ratioWidth}
      onMouseEnter={addLinesOfElements}
      onMouseLeave={clearLines}
      onClick={addElementToMerger}
    />
  );
};
