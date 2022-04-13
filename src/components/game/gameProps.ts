import React from 'react';

export interface IGameWrapper {
  eraId: number;
}

export interface IGameProps extends IGameWrapper {
  setEraId: React.Dispatch<React.SetStateAction<number>>;
  setForceUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IGameActions extends IGameWrapper {
  setEraId: React.Dispatch<React.SetStateAction<number>>;
}
