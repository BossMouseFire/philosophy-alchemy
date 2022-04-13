import React from 'react';

export interface IModal {
  children: React.ReactNode;
  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>;
}
