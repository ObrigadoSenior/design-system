export type ThemeDropdownContentProps = {
  borderRadius: string;
  height: string;
  transitionSpeed: string;
  backgroundColor: string;
};

type ThemeDropdownItemProps = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
};

export type ThemeDropdownContentItemProps = {
  height: string;
  neutral: ThemeDropdownItemProps;
  active: ThemeDropdownItemProps;
  disabled: ThemeDropdownItemProps;
};

export type ThemeDropdownProps = {
  content: ThemeDropdownContentProps & {
    item: ThemeDropdownContentItemProps;
  };
};
