import React from 'react';
import { Modal } from '../modal/modal';
import { IModalAbout } from './modalAboutProps';
import { ModalContentAbout } from './modalContentAbout';

export const ModalAbout: React.FC<IModalAbout> = ({ activeModal, setActiveModal }) => {
  return (
    <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
      <ModalContentAbout />
    </Modal>
  );
};
