import React, { createContext, useContext } from 'react';
import { IElement } from './types/data';
export type GlobalContent = {
  elements: IElement[];
  setElements: React.Dispatch<React.SetStateAction<IElement[]>>;
};
export const GlobalContext = createContext<GlobalContent>({
  elements: [],
  setElements: () => ({}),
});
export const useGlobalContext = () => useContext(GlobalContext);
