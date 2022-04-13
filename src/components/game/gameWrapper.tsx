import React, { useEffect, useRef, useState } from 'react';
import styles from './game.module.scss';
import { Line } from '../line/line';
import { ElementGame } from '../elementGame/elementGame';
import DataService from '../../services/DataService';
import { IHistoryComponent, ILinePos, Status } from '../../types/data';
import { IGameWrapper } from './gameProps';
import { colors, svgSize } from '../../constants';
import { useGlobalContext } from '../../context';

export const GameWrapper: React.FC<IGameWrapper> = ({ eraId }) => {
  const [linesChildren, setLinesChildren] = useState<ILinePos[]>([]);
  const [linesParent, setLinesParent] = useState<ILinePos[]>([]);
  const { setHistory } = useGlobalContext();

  const svgRef = useRef() as React.MutableRefObject<SVGSVGElement>;
  const era = DataService.getEraById(eraId);

  const [svgWidth, setSvgWidth] = useState<number>(svgSize.width);
  const [svgHeight, setSvgHeight] = useState<number>(svgSize.height);

  const ratioWidth = svgWidth / svgSize.width;
  const ratioHeight = svgHeight / svgSize.height;

  const changeSize = () => {
    const svgElement = svgRef.current;
    setSvgWidth(svgElement.width.baseVal.value);
    setSvgHeight(svgElement.height.baseVal.value);
  };

  useEffect(() => {
    if (era) {
      const history: IHistoryComponent = {
        title: era?.name,
        years: era.years,
        description: era.description,
      };
      setHistory(history);
    }
  }, [era]);

  useEffect(() => {
    changeSize();
  }, []);

  useEffect(() => {
    window.addEventListener(
      `resize`,
      () => {
        changeSize();
      },
      false
    );
    return () => {
      window.removeEventListener('resize', () => ({}));
    };
  }, []);

  const getColorElement = (color: Status): string => {
    const { status } = colors;
    switch (color) {
      case 'start':
        return status.start;
      case 'direction':
        return status.direction;
      case 'usual':
        return status.usual;
      case 'philosopher':
        return status.philosopher;
      case 'term':
        return status.term;
      case 'old':
        return status.old;
    }
  };
  return (
    <div className={styles.gameWrapper}>
      <svg width={'100%'} height={'100%'} ref={svgRef}>
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
                colorStroke={getColorElement(element.status)}
                ratioWidth={ratioWidth}
                ratioHeight={ratioHeight}
                setLinesChildren={setLinesChildren}
                setLinesParent={setLinesParent}
              />
            )
        )}
      </svg>
    </div>
  );
};
