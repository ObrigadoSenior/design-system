import { ITheme } from '../models';

interface ISetPriceTheme {
  price: ITheme['price'];
  style: CSSStyleDeclaration;
}

export const setPriceTheme = ({ price, style }: ISetPriceTheme): void => {
  if (price && style) {
    style.setProperty('--price-padding', price.padding);
  }
};
