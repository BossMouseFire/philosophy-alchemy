import React, { Dispatch } from 'react';

export interface IMerger {
  eraId: number;
  setForceUpdate: Dispatch<React.SetStateAction<boolean>>;
}
