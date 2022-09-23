import { IAddTheme } from '../models';
import { setButtonTheme } from './buttonTheme';
import { setCheckboxTheme } from './checkboxTheme';
import { setDropdownTheme } from './dropdownTheme';
import { setInputTheme } from './inputTheme';
import { setMetricsTheme } from './metricsTheme';
import { setRadioTheme } from './radioTheme';
import { setTextTheme } from './textTheme';
import { setImageTheme } from './imageTheme';
import { setModalTheme } from './modalTheme';
import { setSystemTheme } from './systemTheme';
import { setIconTheme } from './iconTheme';

export const AddTheme = ({ theme }: IAddTheme): void => {
  const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  if (canUseDOM) {
    const { style } = document.documentElement || {};
    const { metrics, button, text, image, input, selectors, dropdown, modal, system, icon } = theme || {};

    const { radio, checkbox } = selectors || {};

    if (metrics) setMetricsTheme({ metrics, style });
    if (button) setButtonTheme({ button, style });
    if (input) setInputTheme({ input, style });
    if (checkbox) setCheckboxTheme({ checkbox, style });
    if (radio) setRadioTheme({ radio, style });
    if (dropdown) setDropdownTheme({ dropdown, style });
    if (text) setTextTheme({ text, style });
    if (image) setImageTheme({ image, style });
    if (modal) setModalTheme({ modal, style });
    if (system) setSystemTheme({ system, style });
    if (icon) setIconTheme({ icon, style });
  }
};
