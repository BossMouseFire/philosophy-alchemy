import { Dispatch, SetStateAction } from 'react';

export interface IElement {
  id: number;
  name: string;
  description: string;
  icon: string;
  parents: number[];
  childrenId: number[];
  status: string;
  position: IPosition;
  enabled: boolean;
}

export interface IPosition {
  x: number;
  y: number;
}

export interface IEra {
  id: number;
  name: string;
  years: string;
  description: string;
  elements: IElement[];
}

export interface IData {
  eraArray: IEra[];
}

type IElementPick = Pick<IElement, 'id' | 'icon' | 'childrenId' | 'position' | 'status'>;

export interface ICircleElement extends IElementPick {
  colorStroke: string;
  setListLines: Dispatch<SetStateAction<ILinePos[]>>;
}

export interface ILinePos {
  positionStart: IPosition;
  positionEnd: IPosition;
}
