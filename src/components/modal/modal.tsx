import React from 'react';
import styles from './modal.module.scss';
import { createPortal } from 'react-dom';

interface IModal {
  children: React.ReactNode;
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal: React.FC<IModal> = ({ children, activeModal, setActiveModal }) => {
  const body = document.querySelector('body');

  const onCloseModal = () => {
    setActiveModal(false);
  };

  if (activeModal && body) {
    return createPortal(
      <div className={styles.wrapper} onClick={onCloseModal}>
        {children}
      </div>,
      body
    );
  }
  return null;
};
