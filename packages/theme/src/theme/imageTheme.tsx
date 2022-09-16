import { TThemeImage } from '../models';

interface ISetImageTheme {
  image: TThemeImage;
  style: CSSStyleDeclaration;
}

export const setImageTheme = ({ image, style }: ISetImageTheme): void => {
  if (image && style) {
    style.setProperty('--image-border-radius', image.borderRadius);
  }
};
