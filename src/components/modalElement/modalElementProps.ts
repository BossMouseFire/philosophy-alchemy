import React from 'react';

export interface IModalElement extends IModalContentElement {
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IModalContentElement {
  icon: string;
  name: string;
}
