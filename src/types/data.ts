export interface IElement {
  id: number;
  name: string;
  description: string;
  icon: string;
  parents: number[];
  children: number[];
  status: string;
  posX: number;
  posY: number;
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

export interface ILinePos {
  positionStart: IPosition;
  positionEnd: IPosition;
}
