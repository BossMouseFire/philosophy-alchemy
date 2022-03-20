import React, { useState } from 'react';
import { GlobalContext } from './context';
import { MainPage } from './pages';
import { IElement } from './types/data';

export const Route = () => {
  const [elements, setElements] = useState<IElement[]>([]);
  return (
    <GlobalContext.Provider value={{ elements, setElements }}>
      <MainPage />
    </GlobalContext.Provider>
  );
};
