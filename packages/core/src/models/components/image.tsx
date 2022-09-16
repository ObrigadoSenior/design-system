import { RefObject } from 'react';
import { size } from '../../../../../utils';

export type IImageProps = {
  src: string;
  lowResSrc: string;
  alt: string;
  aspectRatio?: '2-3' | '21-9' | '30-9';
  borderRadius?: size;
  innerRef?: RefObject<HTMLImageElement>;
  className?: string;
};
