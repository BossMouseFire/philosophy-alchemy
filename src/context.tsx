import React, { createContext, useContext } from 'react';
import { IElement, IHistoryComponent } from './types/data';

export type GlobalContent = {
  elements: IElement[];
  setElements: React.Dispatch<React.SetStateAction<IElement[]>>;
  history: IHistoryComponent;
  setHistory: React.Dispatch<React.SetStateAction<IHistoryComponent>>;
};
export const GlobalContext = createContext<GlobalContent>({
  elements: [],
  setElements: () => ({}),
  history: {} as IHistoryComponent,
  setHistory: () => ({}),
});
export const useGlobalContext = () => useContext(GlobalContext);
