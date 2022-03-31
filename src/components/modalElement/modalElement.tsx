import React from 'react';
import { Modal } from '../modal/modal';
import { ModalContentElement } from './modalContentElement';
import { IModalElement } from './modalProps';

export const ModalElement: React.FC<IModalElement> = ({
  activeModal,
  setActiveModal,
  icon,
  name,
}) => {
  return (
    <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
      <ModalContentElement icon={icon} name={name} />
    </Modal>
  );
};
