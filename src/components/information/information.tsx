import React from 'react';
import styles from './information.module.scss';
import { IAboutComponent } from './informationProps';

export const Information: React.FC<IAboutComponent> = ({ title, years, description }) => {
  return (
    <div className={styles.aboutComponent}>
      <span className={styles.title}>{title}</span>
      {years && <span className={styles.years}>{years}</span>}
      <div className={styles.description}>
        <span>{description}</span>
      </div>
    </div>
  );
};
