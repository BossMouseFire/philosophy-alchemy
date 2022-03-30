import React from 'react';
import styles from './modalElement.module.scss';
import { urlImages } from '../../constants';
import { refactorText } from '../../utilities';

interface IModalContentElement {
  icon: string;
  name: string;
  description: string;
}

export const ModalContentElement: React.FC<IModalContentElement> = ({
  icon,
  description,
  name,
}) => {
  return (
    <div className={styles.inner}>
      <span className={styles.titleModal}>Вы открыли новый элемент!</span>
      <div className={styles.viewElem}>
        <img src={urlImages + icon} />
        <span>{name}</span>
      </div>
      <span className={styles.descriptionElem}>{refactorText(description)}</span>
    </div>
  );
};
