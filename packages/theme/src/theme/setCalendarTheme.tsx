import { setStylePerKey } from '.';
import { SetThemeProps, ThemeCalendarDayProps, ThemeCalendarProps } from '../types';

export const setCalendarTheme = ({ data }: SetThemeProps<ThemeCalendarProps>): void => {
  const { day, ...rest } = data || {};

  if (day) {
    for (const key in day) {
      setStylePerKey<ThemeCalendarDayProps>(`calendar-day-${key}`, day[key]);
    }
  }
  rest && setStylePerKey<Omit<ThemeCalendarProps, 'day'>>('calendar', rest);
};
