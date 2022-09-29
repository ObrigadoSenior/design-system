import { ThemeDefaultProps, ThemeFormsProps } from '../../types';

export const defaultFormsTheme = ({ colors, sizes }: Required<ThemeDefaultProps>): ThemeFormsProps => {
  const { bg, primary, secondary, accent, disabled } = colors;
  const { s, m, l } = sizes;
  return {
    input: {
      bgColor: bg,
      textColor: primary,
      borderColor: accent,
      borderRadius: s,
      disabledBgColor: disabled,
      disabledTextColor: secondary,
      disabledBorderColor: disabled,
      disabledTitleColor: disabled,
      titleColor: primary,
      placeholderColor: primary,
      paddingWithoutIcon: s,
      paddingWithIcon: m,
    },
    dropdown: {
      content: {
        borderRadius: s,
        height: '300px',
        transitionSpeed: '0.5s',
        bgColor: bg,
      },
      items: {
        neutral: {
          bgColor: bg,
          borderColor: bg,
          textColor: primary,
          iconColor: primary,
          height: l,
        },
        active: {
          bgColor: accent,
          borderColor: accent,
          textColor: secondary,
          iconColor: secondary,
          height: l,
        },
        disabled: {
          bgColor: disabled,
          borderColor: disabled,
          textColor: secondary,
          iconColor: secondary,
          height: l,
        },
      },
    },
    checkbox: {
      bgColor: bg,
      disabledBgColor: disabled,
      checkmarkColor: accent,
      hoverColor: primary,
      labelColor: primary,
      disabledLabelColor: disabled,
      borderRadius: s,
      borderColor: accent,
      disabledBorderColor: disabled,
    },
    radio: {
      bgColor: bg,
      disabledBgColor: disabled,
      checkmarkColor: accent,
      hoverColor: primary,
      labelColor: primary,
      disabledLabelColor: disabled,
      borderRadius: '50%',
      borderColor: accent,
      disabledBorderColor: disabled,
    },
  };
};
