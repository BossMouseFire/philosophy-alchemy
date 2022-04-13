import React from 'react';
import { IModalHelper } from './modalHelperProps';
import { Modal } from '../modal/modal';
import { ModalContentHelper } from './modalContentHelper';

export const ModalHelper: React.FC<IModalHelper> = ({ activeModal, setActiveModal }) => {
  return (
    <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
      <ModalContentHelper />
    </Modal>
  );
};
