import { AddThemeProps } from '../models';
import { setButtonTheme } from './buttonTheme';
import { setCheckboxTheme } from './checkboxTheme';
import { setDropdownTheme } from './dropdownTheme';
import { setIconTheme } from './iconTheme';
import { setInputTheme } from './inputTheme';
import { setMetricsTheme } from './metricsTheme';
import { setModalTheme } from './modalTheme';
import { setRadioTheme } from './radioTheme';
import { setSystemTheme } from './systemTheme';
import { setTextTheme } from './textTheme';

export const AddTheme = ({ theme }: AddThemeProps): void => {
  const canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);

  if (canUseDOM) {
    const { style } = document.documentElement || {};
    const { metrics, button, text, input, selectors, dropdown, modal, system, icon } = theme || {};

    const { radio, checkbox } = selectors || {};

    /* DEFAULT */
    if (metrics) setMetricsTheme({ metrics, style });
    if (system) setSystemTheme({ system, style });

    /* CORE */
    if (text) setTextTheme({ text, style });
    if (button) setButtonTheme({ button, style });
    if (icon) setIconTheme({ icon, style });

    /* FORMS */
    if (input) setInputTheme({ input, style });
    if (checkbox) setCheckboxTheme({ checkbox, style });
    if (radio) setRadioTheme({ radio, style });
    if (dropdown) setDropdownTheme({ dropdown, style });

    /* SYSTEM */
    if (modal) setModalTheme({ modal, style });
  }
};
