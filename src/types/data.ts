export interface IElement {
  id: number;
  name: string;
  description: string;
  icon: string;
  parentsId: number[];
  childrenId: number[];
  status: string;
  posX: number;
  posY: number;
  enabled: boolean;
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
