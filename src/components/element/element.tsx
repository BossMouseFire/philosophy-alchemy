import React from 'react';
import { radius, sizeImage } from '../../constants';
import styles from './element.module.scss';
import { ElementProps } from './elementProps';

export const Element: React.FC<ElementProps> = ({
  name,
  position,
  colorStroke,
  imageHref,
  isText,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  return (
    <g>
      <image href={imageHref} x={position.x - sizeImage / 2} y={position.y - sizeImage / 2} />
      <circle
        className={styles.circle}
        r={radius}
        cx={position.x}
        cy={position.y}
        stroke={colorStroke}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
      {isText && (
        <text x={position.x} y={position.y + radius * 1.5} className={styles.text}>
          {name}
        </text>
      )}
    </g>
  );
};
