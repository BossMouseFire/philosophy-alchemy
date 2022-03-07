import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface ILayoutPage
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode;
}
