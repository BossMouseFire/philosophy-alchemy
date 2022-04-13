import React from 'react';

export interface IHistory {
  eraId: number;
  setForceUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}
