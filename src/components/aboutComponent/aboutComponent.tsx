import React from 'react';
import styles from './aboutComponent.module.scss';
import { IAboutComponent } from './aboutComponentProps';

export const AboutComponent: React.FC<IAboutComponent> = ({ title, years, description }) => {
  return (
    <div className={styles.aboutComponent}>
      <span className={styles.title}>{title}</span>
      <span className={styles.years}>{years}</span>
      <span className={styles.description}>{description}</span>
    </div>
  );
};
