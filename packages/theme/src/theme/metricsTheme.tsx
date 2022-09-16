import { TThemeMetrics } from '../models';

interface ISetMetricsTheme {
  metrics: TThemeMetrics;
  style: CSSStyleDeclaration;
}

export const setMetricsTheme = ({ metrics, style }: ISetMetricsTheme): void => {
  if (metrics && style) {
    const { sizes, width } = metrics;
    if (width) {
      style.setProperty('--metrics-min-width', width.min);
      style.setProperty('--metrics-max-width', width.max);
    }
    if (sizes) {
      style.setProperty('--metrics-size-xs', sizes.sizeXs);
      style.setProperty('--metrics-size-s', sizes.sizeS);
      style.setProperty('--metrics-size-m', sizes.sizeM);
      style.setProperty('--metrics-size-l', sizes.sizeL);
      style.setProperty('--metrics-size-xl', sizes.sizeXl);
    }
  }
};
