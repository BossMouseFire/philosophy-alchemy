import React from 'react';

export interface IGameWrapper {
  eraId: number;
}

export interface IGameActions {
  eraId: number;
  setEraId: React.Dispatch<React.SetStateAction<number>>;
}
