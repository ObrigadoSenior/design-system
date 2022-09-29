import { cleanup } from '@testing-library/react';
import { AddTheme } from '.';
import { ThemeFormsProps, ThemeProps } from '../types';

export const forms: ThemeFormsProps = {
  input: {
    bgColor: 'blue',
    textColor: 'black',
    borderColor: 'gray',
    borderRadius: '10px',
    disabledBgColor: 'yellow',
    disabledTextColor: 'gray',
    disabledBorderColor: 'yellow',
    disabledTitleColor: 'gray',
    titleColor: 'black',
    placeholderColor: 'gray',
    paddingWithoutIcon: '10px',
    paddingWithIcon: '20px',
  },
  checkbox: {
    bgColor: 'blue',
    disabledBgColor: 'gray',
    checkmarkColor: 'blue',
    hoverColor: 'gray',
    labelColor: 'black',
    disabledLabelColor: 'gray',
    borderRadius: '5px',
    borderColor: 'gray',
    disabledBorderColor: 'gray',
  },
  radio: {
    bgColor: 'blue',
    disabledBgColor: 'gray',
    checkmarkColor: 'blue',
    hoverColor: 'gray',
    labelColor: 'black',
    disabledLabelColor: 'gray',
    borderRadius: '25px',
    borderColor: 'gray',
    disabledBorderColor: 'gray',
  },
  dropdown: {
    content: {
      borderRadius: '10px',
      height: '300px',
      transitionSpeed: '0.5s',
      bgColor: 'blue',
    },
    items: {
      neutral: {
        bgColor: 'blue',
        borderColor: 'blue',
        textColor: 'black',
        iconColor: 'black',
        height: '40px',
      },
      active: {
        bgColor: 'blue',
        borderColor: 'blue',
        textColor: 'blue',
        iconColor: 'blue',
        height: '40px',
      },
      disabled: {
        bgColor: 'yellow',
        borderColor: 'yellow',
        textColor: 'yellow',
        iconColor: 'yellow',
        height: '40px',
      },
    },
  },
};

const theme: ThemeProps = {
  colors: {
    bg: 'red',
    primary: 'green',
    secondary: 'yellow',
    primaryAccent: 'purple',
    secondaryAccent: 'blue',
  },
  sizes: {
    none: '0',
    xs: '1',
    s: '2',
    m: '3',
    l: '4',
    xl: '5',
  },
  core: {
    button: {
      icon: {
        bgColor: 'green',
        borderColor: 'blue',
        borderRadius: '5px',
        padding: '10px',
        textColor: 'red',
      },
      primary: {
        bgColor: 'green',
        borderColor: 'blue',
        borderRadius: '5px',
        padding: '10px',
        textColor: 'red',
      },
      secondary: {
        bgColor: 'green',
        borderColor: 'blue',
        borderRadius: '5px',
        padding: '10px',
        textColor: 'red',
      },
    },
    text: {
      primaryColor: 'black',
      secondaryColor: 'white',
      disabledColor: 'grey',
      fontSizeXs: '0.75rem',
      fontSizeS: '0.95rem',
      fontSizeM: '1.15rem',
      fontSizeL: '1.45rem',
      fontSizeXl: '2rem',
      fontWeightLight: '200',
      fontWeightMedium: '400',
      fontWeightBold: '700',
    },
    icon: {
      primaryColor: 'red',
      secondaryColor: 'green',
      disabledColor: 'grey',
      sizeXs: '1em',
      sizeS: '2em',
      sizeM: '3em',
      sizeL: '4em',
      sizeXl: '5em',
    },
  },
  forms,
};

AddTheme({ theme });
afterEach(cleanup);

const { style } = document.documentElement || {};
const getStyle = (value: string) => (style.getPropertyValue(value) ? true : false);
const getStyleVal = (value: string) => style.getPropertyValue(value);

describe('Theme', () => {
  describe('Default', () => {
    test('sets system color and sizes', () => {
      expect(getStyle('--system-color-primary')).toBeTruthy();
      expect(getStyleVal('--system-color-bg')).toBe(theme.colors?.bg);
      expect(getStyle('--system-size-xs')).toBeTruthy();
      expect(getStyleVal('--system-size-xl')).toBe(theme.sizes?.xl);
    });
  });
  describe('Core', () => {
    test('sets button', () => {
      expect(getStyle('--button-primary-text-color')).toBeTruthy();
      expect(getStyle('--button-secondary-text-color')).toBeTruthy();
      expect(getStyle('--button-icon-text-color')).toBeTruthy();
    });
    test('sets text', () => {
      expect(getStyle('--text-disabled-color')).toBeTruthy();
      expect(getStyle('--text-font-size-s')).toBeTruthy();
      expect(getStyle('--text-font-weight-light')).toBeTruthy();
    });
  });
  describe('Forms', () => {
    test('sets input', () => {
      expect(getStyle('--input-bg-color')).toBeTruthy();
      expect(getStyle('--input-text-color')).toBeTruthy();
      expect(getStyle('--input-title-color')).toBeTruthy();
    });
    test('sets checkbox', () => {
      expect(getStyle('--checkbox-bg-color')).toBeTruthy();
      expect(getStyle('--checkbox-checkmark-color')).toBeTruthy();
      expect(getStyle('--checkbox-hover-color')).toBeTruthy();
    });
    test('sets radio', () => {
      expect(getStyle('--radio-bg-color')).toBeTruthy();
      expect(getStyle('--radio-checkmark-color')).toBeTruthy();
      expect(getStyle('--radio-hover-color')).toBeTruthy();
    });
    test('sets dropdown', () => {
      expect(getStyle('--dropdown-content-border-radius')).toBeTruthy();
      expect(getStyle('--dropdown-content-transition-speed')).toBeTruthy();
      expect(getStyle('--dropdown-content-item-neutral-height')).toBeTruthy();
      expect(getStyle('--dropdown-content-item-neutral-bg-color')).toBeTruthy();
      expect(getStyle('--dropdown-content-item-active-bg-color')).toBeTruthy();
      expect(getStyle('--dropdown-content-item-disabled-bg-color')).toBeTruthy();
    });
  });
});
