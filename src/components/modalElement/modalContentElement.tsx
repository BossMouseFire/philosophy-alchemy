import React, { useEffect, useRef } from 'react';
import styles from './modalElement.module.scss';
import { urlImages } from '../../constants';
import { IModalContentElement } from './modalElementProps';

export const ModalContentElement: React.FC<IModalContentElement> = ({ icon, name }) => {
  const refElement = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    refElement.current.classList.add(styles.activeModal);
  }, []);

  return (
    <div className={styles.inner} ref={refElement}>
      <span className={styles.titleModal}>Вы открыли новый элемент!</span>
      <div className={styles.viewElem}>
        <img src={urlImages + icon} />
        <span>{name}</span>
      </div>
    </div>
  );
};
