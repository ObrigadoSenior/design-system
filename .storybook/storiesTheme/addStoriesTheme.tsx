import {sizes, travelColors} from '../../travelTheme';
const { style } = document.documentElement || {};
export const setStoriesTheme = (): void => {
  /** SIZES */
  style.setProperty('--stories-size-none', `${sizes.none}px`);
  style.setProperty('--stories-size-xxxs', `${sizes.xxxsmall}px`);
  style.setProperty('--stories-size-xxs', `${sizes.xxsmall}px`);
  style.setProperty('--stories-size-xs', `${sizes.xsmall}px`);
  style.setProperty('--stories-size-s', `${sizes.small}px`);
  style.setProperty('--stories-size-m', `${sizes.medium}px`);
  style.setProperty('--stories-size-l', `${sizes.large}px`);
  style.setProperty('--stories-size-xl', `${sizes.xlarge}px`);
  style.setProperty('--stories-size-xxl', `${sizes.xxlarge}px`);

  /** COLORS */

  /** Main */
  style.setProperty('--stories-color-modern-red', travelColors.modernRed);
  style.setProperty('--stories-color-modern-blue', travelColors.modernBlue);
  style.setProperty('--stories-color-tjara', travelColors.tjara);
  style.setProperty('--stories-color-moln', travelColors.moln);

  /** System */
  style.setProperty('--stories-color-silver', travelColors.silver);
  style.setProperty('--stories-color-silver-light', travelColors.silverLight);
  style.setProperty('--stories-color-silver-dark', travelColors.silverDark);
  style.setProperty('--stories-color-shadow', travelColors.shadow);
  style.setProperty('--stories-color-overlay', travelColors.overlay);

  /** Complementary */
  style.setProperty('--stories-color-sand', travelColors.sand);
  style.setProperty('--stories-color-snackskal', travelColors.snackskal);
  style.setProperty('--stories-color-sjobod', travelColors.sjobod);
  style.setProperty('--stories-color-tang', travelColors.tang);
  style.setProperty('--stories-color-himmel', travelColors.himmel);
  style.setProperty('--stories-color-hav', travelColors.hav);
  style.setProperty('--stories-color-mussla', travelColors.mussla);

  /** Complementary */
  style.setProperty('--stories-color-modern-green', travelColors.modernGreen);

  /** Complementary */
  style.setProperty('--stories-color-extra', travelColors.extra);
};
