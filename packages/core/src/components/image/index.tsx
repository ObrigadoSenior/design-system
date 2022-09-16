import React from 'react';
import { useProgressiveImg } from '../../hooks/image/useProgressiveImg';
import { IImageProps } from '../../models/components/image';
import './imageStyle.css';

export const Image: React.FC<IImageProps> = ({
  className = '',
  aspectRatio = '21-9',
  borderRadius = 'm',
  innerRef,
  src,
  lowResSrc,
  ...rest
}) => {
  const { newSrc, blur } = useProgressiveImg({ lowQualitySrc: lowResSrc, highQualitySrc: src });

  return (
    <div
      data-testid="image-wrapper"
      className={`image ${
        blur ? 'blur' : 'no-blur'
      } image-border-radius-${borderRadius} image-aspect-ratio-${aspectRatio} ${className}`}
      ref={innerRef}
    >
      <img data-testid="image" src={newSrc} {...rest} />
    </div>
  );
};
