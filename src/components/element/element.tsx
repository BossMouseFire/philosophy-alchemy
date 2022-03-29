import React from 'react';
import styles from './element.module.scss';
import { ElementProps } from './elementProps';

export const Element: React.FC<ElementProps> = ({
  name,
  position,
  colorStroke,
  imageHref,
  radius,
  sizeImage,
  isText,
  ratioHeight,
  ratioWidth,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const widthImage = (sizeImage * (ratioWidth + ratioHeight)) / 2;
  const heightImage = (sizeImage * (ratioWidth + ratioHeight)) / 2;
  const average = (ratioWidth + ratioHeight) / 2;
  return (
    <g>
      <image
        href={imageHref}
        x={position.x * ratioWidth - widthImage / 2}
        y={position.y * ratioHeight - heightImage / 2}
        width={widthImage}
        height={heightImage}
      />
      <circle
        className={styles.circle}
        r={radius * average}
        cx={position.x * ratioWidth}
        cy={position.y * ratioHeight}
        stroke={colorStroke}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      />
      {isText && (
        <text
          x={position.x * ratioWidth}
          y={position.y * ratioHeight + radius * 1.7 * average}
          className={styles.text}
        >
          {name}
        </text>
      )}
    </g>
  );
};
