import { IAddTheme } from '../models';
import { setButtonTheme } from './buttonTheme';
import { setCheckboxTheme } from './checkboxTheme';
import { setDatePickerTheme } from './datePickerTheme';
import { setDropdownTheme } from './dropdownTheme';
import { setInputTheme } from './inputTheme';
import { setMetricsTheme } from './metricsTheme';
import { setRadioTheme } from './radioTheme';
import { setTextTheme } from './textTheme';
import { setTabTheme } from './tabTheme';
import { setImageTheme } from './imageTheme';
import { setPriceTheme } from './priceTheme';
import { setModalTheme } from './modalTheme';

export const AddTheme = ({ theme }: IAddTheme): void => {
  const { style } = document.documentElement || {};
  const { metrics, button, text, image, input, selectors, datePicker, dropdown, tab, price, modal } = theme || {};

  const { radio, checkbox } = selectors || {};

  if (metrics) setMetricsTheme({ metrics, style });
  if (button) setButtonTheme({ button, style });
  if (input) setInputTheme({ input, style });
  if (checkbox) setCheckboxTheme({ checkbox, style });
  if (radio) setRadioTheme({ radio, style });
  if (datePicker) setDatePickerTheme({ datePicker, style });
  if (dropdown) setDropdownTheme({ dropdown, style });
  if (text) setTextTheme({ text, style });
  if (tab) setTabTheme({ tab, style });
  if (image) setImageTheme({ image, style });
  if (price) setPriceTheme({ price, style });
  if (modal) setModalTheme({ modal, style });
};
