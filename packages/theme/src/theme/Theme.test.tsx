import { cleanup } from '@testing-library/react';
import { AddTheme } from '.';
import { coreTheme } from '../../../core';
import { formsTheme } from '../../../forms';
import { ThemeFormsProps, ThemeProps } from '../types';

export const forms: ThemeFormsProps = {
  input: {
    backgroundColor: 'blue',
    textColor: 'black',
    borderColor: 'gray',
    borderRadius: '10px',
    disabledBackgroundColor: 'yellow',
    disabledTextColor: 'gray',
    disabledBorderColor: 'yellow',
    disabledTitleColor: 'gray',
    titleColor: 'black',
    placeholderColor: 'gray',
    padding: {
      noIcon: '10px',
      withIcon: '20px',
    },
  },
  checkbox: {
    backgroundColor: 'blue',
    disabledBackgroundColor: 'gray',
    checkmarkColor: 'blue',
    hoverColor: 'gray',
    labelColor: 'black',
    disabledLabelColor: 'gray',
    borderRadius: '5px',
    borderColor: 'gray',
    disabledBorderColor: 'gray',
  },
  radio: {
    backgroundColor: 'blue',
    disabledBackgroundColor: 'gray',
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
      backgroundColor: 'blue',
      item: {
        height: '40px',
        neutral: {
          backgroundColor: 'blue',
          borderColor: 'blue',
          textColor: 'black',
          iconColor: 'black',
        },
        active: {
          backgroundColor: 'blue',
          borderColor: 'blue',
          textColor: 'blue',
          iconColor: 'blue',
        },
        disabled: {
          backgroundColor: 'yellow',
          borderColor: 'yellow',
          textColor: 'yellow',
          iconColor: 'yellow',
        },
      },
    },
  },
};

const theme: ThemeProps = {
  colors: {
    background: 'red',
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
        backgroundColor: 'green',
        borderColor: 'blue',
        borderRadius: '5px',
        padding: '10px',
        textColor: 'red',
      },
      primary: {
        backgroundColor: 'green',
        borderColor: 'blue',
        borderRadius: '5px',
        padding: '10px',
        textColor: 'red',
      },
      secondary: {
        backgroundColor: 'green',
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
      expect(getStyle('--system-primary-color')).toBeTruthy();
      expect(getStyleVal('--system-background-color')).toBe(theme.colors?.background);
      expect(getStyle('--system-size-xs')).toBeTruthy();
      expect(getStyleVal('--system-size-xl')).toBe(theme.sizes?.xl);
    });
  });

  describe('Core', () => {
    test('sets button', () => {
      expect(getStyle('--button-primary-color')).toBeTruthy();
      expect(getStyle('--button-secondary-color')).toBeTruthy();
      expect(getStyle('--button-icon-color')).toBeTruthy();
    });
    test('sets text', () => {
      expect(getStyle('--text-disabled-color')).toBeTruthy();
      expect(getStyle('--text-size-s')).toBeTruthy();
      expect(getStyle('--text-weight-light')).toBeTruthy();
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
      expect(getStyle('--dropdown-border-radius')).toBeTruthy();
      expect(getStyle('--dropdown-content-transition-speed')).toBeTruthy();
      expect(getStyle('--dropdown-content-item-height')).toBeTruthy();
      expect(getStyle('--dropdown-content-item-neutral-bg-color')).toBeTruthy();
      expect(getStyle('--dropdown-content-item-active-bg-color')).toBeTruthy();
      expect(getStyle('--dropdown-content-item-disabled-bg-color')).toBeTruthy();
    });
  });
});
