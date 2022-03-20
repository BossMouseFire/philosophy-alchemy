import { DetailedHTMLProps, SVGProps } from 'react';
import { IPosition } from '../../types/data';

export interface ElementProps
  extends DetailedHTMLProps<SVGProps<SVGCircleElement>, SVGCircleElement> {
  name: string;
  position: IPosition;
  colorStroke: string;
  imageHref: string;
  isText: boolean;
}
