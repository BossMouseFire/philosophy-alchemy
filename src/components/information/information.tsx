import React from 'react';
import styles from './information.module.scss';
import { IAboutComponent } from './informationProps';

export const Information: React.FC<IAboutComponent> = ({ title, years, description }) => {
  return (
    <div className={styles.aboutComponent}>
      <span className={styles.title}>{title}</span>
      <span className={styles.years}>{years}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};
