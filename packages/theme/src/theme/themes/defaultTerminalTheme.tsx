import { ThemeDefaultProps, ThemeTerminalProps } from '../../types';

export const defaultTerminalTheme = ({ colors, sizes }: Required<ThemeDefaultProps>): ThemeTerminalProps => {
  const { bg, primary, secondary, accent, disabled } = colors;
  const { m, xl } = sizes;

  return {
    base: {
      bgColor: bg,
      borderColor: accent,
      minHeight: '40vh',
      minWidth: '60vw',
      textColor: 'primary',
    },
    top: {
      bgColor: accent,
      height: xl,
    },
    progressBar: {
      bgColor: accent,
      height: m,
    },
    input: {
      branchBgColor: secondary,
      color: primary,
      pathBgColor: bg,
      dateColor: disabled,
      fontSize: '0.75rem',
      fontWeight: '400',
    },
    textBlock: {
      color: primary,
      fontSize: '0.75rem',
      fontWeight: '400',
    },
  };
};
