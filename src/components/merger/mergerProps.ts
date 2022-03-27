import React, { Dispatch } from 'react';

export interface IMerger {
  setForceUpdate: Dispatch<React.SetStateAction<boolean>>;
}
