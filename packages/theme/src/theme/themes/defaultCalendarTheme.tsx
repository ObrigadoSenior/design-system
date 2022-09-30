import { ThemeCalendarProps, ThemeDefaultProps } from '../../types';

export const defaultCalendarTheme = ({ colors, sizes }: Required<ThemeDefaultProps>): ThemeCalendarProps => {
  const { bg, primary, secondary, accent, disabled } = colors;
  const { xs, s, m, l, xl } = sizes;

  return {
    bgColor: bg,
    borderColor: accent,
    color: primary,
    gap: '2px',
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
        borderColor: accent,
      },
      otherMonth: {
        color: primary,
        bgColor: 'transparent',
        borderColor: accent,
      },
      searchedStart: {
        bgColor: accent,
        borderColor: accent,
        color: primary,
      },
      searchedEnd: {
        bgColor: accent,
        borderColor: accent,
        color: primary,
      },
      range: {
        bgColor: secondary,
        borderColor: secondary,
        color: accent,
      },
      disabled: {
        bgColor: disabled,
        borderColor: disabled,
        color: primary,
      },
    },
  };
};
