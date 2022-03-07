import React from 'react';
import { ILayoutPage } from './layoutPageProps';
import styles from './layoutPage.module.scss';
import cn from 'classnames';

export const LayoutPage: React.FC<ILayoutPage> = ({ children, className }) => {
  return <div className={cn(styles.layout, className)}>{children}</div>;
};
