import { cleanup } from '@testing-library/react';
import { AddTheme } from '.';
import { calendarTheme } from '../../../calendar';
import { coreTheme } from '../../../core';
import { formsTheme } from '../../../forms';
import { systemTheme } from '../../../system';

import { metrics } from '../../../../travelTheme';

AddTheme({ theme: { metrics, ...calendarTheme, ...coreTheme, ...formsTheme, ...systemTheme } });
afterEach(cleanup);

const { style } = document.documentElement || {};
const getStyle = (value: string) => (style.getPropertyValue(value) ? true : false);

describe('Theme', () => {
  test('sets metrics', () => {
    expect(getStyle('--metrics-min-width')).toBeTruthy();
    expect(getStyle('--metrics-size-xs')).toBeTruthy();
    expect(getStyle('--metrics-size-xl')).toBeTruthy();
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
  test('sets datepicker', () => {
    expect(getStyle('--date-picker-border-radius')).toBeTruthy();
    expect(getStyle('--date-picker-day-width')).toBeTruthy();
    expect(getStyle('--date-picker-day-disabled-border-color')).toBeTruthy();
    expect(getStyle('--date-picker-day-active-border-color')).toBeTruthy();
    expect(getStyle('--date-picker-day-active-month-border-color')).toBeTruthy();
    expect(getStyle('--date-picker-day-selected-border-color')).toBeTruthy();
    expect(getStyle('--date-picker-day-selected-range-border-color')).toBeTruthy();
    expect(getStyle('--date-picker-day-month-break-border-color')).toBeTruthy();
    expect(getStyle('--date-picker-week-text-size')).toBeTruthy();
    expect(getStyle('--date-picker-text-color')).toBeTruthy();
    expect(getStyle('--date-picker-change-month-button-border-color')).toBeTruthy();
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
    expect(getStyle('--text-disabled-color')).toBeTruthy();
    expect(getStyle('--text-size-s')).toBeTruthy();
    expect(getStyle('--text-font-weight-light')).toBeTruthy();
  });
  test('sets image', () => {
    expect(getStyle('--image-border-radius')).toBeTruthy();
  });
  test('sets modal', () => {
    expect(getStyle('--modal-color')).toBeTruthy();
    expect(getStyle('--modal-border-color')).toBeTruthy();
    expect(getStyle('--modal-shadow')).toBeTruthy();
  });
});
