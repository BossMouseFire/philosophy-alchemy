import React from 'react';
import { ILayoutPage } from './layoutPageProps';
import styles from './layoutPage.module.scss';
import cn from 'classnames';

export const LayoutPage: React.FC<ILayoutPage> = ({ eraId, children }) => {
  switch (eraId) {
    case 1:
      return <div className={cn(styles.layout, styles.middleAge)}>{children}</div>;
    case 2:
      return <div className={cn(styles.layout, styles.revival)}>{children}</div>;
    default:
      return <div className={cn(styles.layout)}>{children}</div>;
  }
};
