import React from 'react';
import styles from './modalElement.module.scss';
import { urlImages } from '../../constants';
import { IModalContentElement } from './modalProps';

export const ModalContentElement: React.FC<IModalContentElement> = ({ icon, name }) => {
  return (
    <div className={styles.inner}>
      <span className={styles.titleModal}>Вы открыли новый элемент!</span>
      <div className={styles.viewElem}>
        <img src={urlImages + icon} />
        <span>{name}</span>
      </div>
    </div>
  );
};
