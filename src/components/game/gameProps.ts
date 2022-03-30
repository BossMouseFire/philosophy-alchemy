import React from 'react';

export interface IGameWrapper {
  eraId: number;
}

export interface IGameProps extends IGameWrapper {
  setEraId: React.Dispatch<React.SetStateAction<number>>;
}
