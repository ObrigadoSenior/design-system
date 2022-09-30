import { ThemeCalendarProps, ThemeDefaultProps } from '../../types';

export const defaultCalendarTheme = ({ colors, sizes }: Required<ThemeDefaultProps>): ThemeCalendarProps => {
  const { bg, primary, secondary, accent, disabled } = colors;
  const { xs, s, m, l, xl } = sizes;

  return {
    bgColor: bg,
    borderColor: accent,
    color: primary,
    gap: '0px',
    maxWidth: '50%',
    monthPadding: xs,
    padding: s,
    weekdayPadding: `${m} 0`,
    borderRadius: m,
    day: {
      default: {
        borderRadius: '2px',
        height: xl,
        color: primary,
        bgColor: 'transparent',
        borderColor: 'transparent',
      },
      otherMonth: {
        color: primary,
        bgColor: 'transparent',
        borderColor: 'transparent',
      },
      searchedStart: {
        bgColor: primary,
        borderColor: primary,
        color: bg,
      },
      searchedEnd: {
        bgColor: primary,
        borderColor: primary,
        color: bg,
      },
      range: {
        bgColor: accent,
        borderColor: accent,
        color: secondary,
      },
      disabled: {
        bgColor: disabled,
        borderColor: disabled,
        color: primary,
      },
    },
  };
};
