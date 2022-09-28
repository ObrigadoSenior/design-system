import { cleanup } from '@testing-library/react';
import { AddTheme } from '.';
import { coreTheme } from '../../../core';
import { formsTheme } from '../../../forms';

AddTheme({ theme: { ...coreTheme, ...formsTheme } });
afterEach(cleanup);

const { style } = document.documentElement || {};
const getStyle = (value: string) => (style.getPropertyValue(value) ? true : false);

describe('Theme', () => {
  test('sets default', () => {
    expect(getStyle('--system-size-xs')).toBeTruthy();
    expect(getStyle('--system-size-xl')).toBeTruthy();
  });
  test('sets button', () => {
    expect(getStyle('--button-primary-color')).toBeTruthy();
    expect(getStyle('--button-flat-color')).toBeTruthy();
    expect(getStyle('--button-secondary-color')).toBeTruthy();
    expect(getStyle('--button-badge-color')).toBeTruthy();
    expect(getStyle('--button-icon-color')).toBeTruthy();
  });
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
    expect(getStyle('--dropdown-content-item-bg-color')).toBeTruthy();
    expect(getStyle('--dropdown-content-item-active-bg-color')).toBeTruthy();
    expect(getStyle('--dropdown-content-item-disabled-bg-color')).toBeTruthy();
  });
  test('sets text', () => {
    expect(getStyle('--text-color-disabled')).toBeTruthy();
    expect(getStyle('--text-size-s')).toBeTruthy();
    expect(getStyle('--text-weight-light')).toBeTruthy();
  });
});
