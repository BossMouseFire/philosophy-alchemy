import { Dispatch, SetStateAction } from 'react';
import { IElement, ILinePos } from '../../types/data';

export interface IElementGame {
  element: IElement;
  colorStroke: string;
  eraId: number;
  setLinesChildren: Dispatch<SetStateAction<ILinePos[]>>;
  setLinesParent: Dispatch<SetStateAction<ILinePos[]>>;
  ratioWidth: number;
  ratioHeight: number;
}
