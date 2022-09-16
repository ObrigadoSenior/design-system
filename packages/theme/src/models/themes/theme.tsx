import { TThemeButton } from './button';
import { TThemeCheckbox } from './checkbox';
import { TThemeDatePicker } from './datePicker';
import { TThemeMetrics } from './metrics';
import { TThemeInput } from './input';
import { TThemeRadio } from './radio';
import { TThemeDropdown } from './dropdown';
import { TThemeText } from './text';
import { TThemeTab } from './tab';
import { TThemeImage } from './image';
import { TThemePrice } from './price';
import { TThemeModal } from './modal';

export type ITheme = {
  metrics?: TThemeMetrics;
  button?: {
    primary?: TThemeButton;
    flat?: TThemeButton;
    secondary?: TThemeButton;
    badge?: TThemeButton;
    icon?: TThemeButton;
  };
  image?: TThemeImage;
  input?: TThemeInput;
  text?: TThemeText;
  selectors?: {
    checkbox?: TThemeCheckbox;
    radio?: TThemeRadio;
  };
  datePicker?: TThemeDatePicker;
  dropdown?: TThemeDropdown;
  tab?: TThemeTab;
  price?: TThemePrice;
  modal?: TThemeModal;
};
