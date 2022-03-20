import React from 'react';
import { ILinePos, IPosition } from '../../types/data';
import DataService from '../../services/DataService';
import { changeCoordinates } from '../../utilities';
import { IElementGame } from './elementGameProps';
import { Element } from '../element/element';
import { useGlobalContext } from '../../context';

export const ElementGame: React.FC<IElementGame> = ({
  element,
  colorStroke,
  eraId,
  setLinesChildren,
  setLinesParent,
}) => {
  const { posX, posY, name, children, parents } = element;
  const { elements, setElements } = useGlobalContext();

  const getLinesArray = (arrayIds: number[]) => {
    const result: ILinePos[] = [];
    arrayIds.map((id) => {
      const element = DataService.getElement(eraId, id);
      if (element && element.enabled) {
        const positionStart = Object.assign({ x: posX, y: posY } as IPosition);
        const positionEnd = Object.assign({ x: element.posX, y: element.posY } as IPosition);
        const [positionStartNew, positionEndNew] = changeCoordinates(positionStart, positionEnd);
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
    if (elements.indexOf(element) === -1) {
      setElements(() => [...elements, element]);
    }
  };

  return (
    <Element
      name={name}
      position={{ x: posX, y: posY } as IPosition}
      colorStroke={colorStroke}
      imageHref={'http://localhost:3000/images/test.svg'}
      isText={true}
      onMouseEnter={addLinesOfElements}
      onMouseLeave={clearLines}
      onClick={addElementToMerger}
    />
  );
};
