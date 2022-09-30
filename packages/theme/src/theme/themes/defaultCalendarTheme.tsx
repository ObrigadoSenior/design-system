import { ThemeCalendarProps, ThemeDefaultProps } from '../../types';

export const defaultCalendarTheme = ({ colors, sizes }: Required<ThemeDefaultProps>): ThemeCalendarProps => {
  const { bg, primary, secondary, accent, disabled } = colors;
  const { xs, s, m, l, xl } = sizes;

  return {
    bgColor: bg,
    borderColor: accent,
    color: primary,
    gap: xs,
    maxWidth: '50%',
    monthPadding: xs,
    padding: s,
    weekdayPadding: m,
    borderRadius: m,
    day: {
      default: {
        borderRadius: xs,
        border: `1px solid ${accent}`,
        height: xl,
        color: primary,
        bgColor: bg,
        borderColor: secondary,
      },
      otherMonth: {
        bgColor: secondary,
        borderColor: secondary,
        color: accent,
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
