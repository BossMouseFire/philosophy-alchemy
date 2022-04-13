import React, { useState } from 'react';
import { GlobalContext } from './context';
import { MainPage } from './pages';
import { IElement, IHistoryComponent } from './types/data';

export const Route = () => {
  const [elements, setElements] = useState<IElement[]>([]);
  const [history, setHistory] = useState<IHistoryComponent>({} as IHistoryComponent);
  return (
    <GlobalContext.Provider value={{ elements, setElements, history, setHistory }}>
      <MainPage />
    </GlobalContext.Provider>
  );
};
