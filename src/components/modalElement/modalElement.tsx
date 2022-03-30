import React from 'react';
import { Modal } from '../modal/modal';
import { ModalContentElement } from './modalContentElement';

interface IModalElement {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
  icon: string;
  name: string;
  description: string;
}

export const ModalElement: React.FC<IModalElement> = ({
  activeModal,
  setActiveModal,
  icon,
  description,
  name,
}) => {
  return (
    <Modal activeModal={activeModal} setActiveModal={setActiveModal}>
      <ModalContentElement icon={icon} name={name} description={description} />
    </Modal>
  );
};
