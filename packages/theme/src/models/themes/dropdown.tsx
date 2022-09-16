export type TThemeDropdownContent = {
  borderRadius: string;
  height: string;
  transitionSpeed: string;
  backgroundColor: string;
};

type TThemeDropdownItem = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
};

export type TThemeDropdownContentItem = {
  height: string;
  neutral: TThemeDropdownItem;
  active: TThemeDropdownItem;
  disabled: TThemeDropdownItem;
};

export type TThemeDropdown = {
  content: TThemeDropdownContent & {
    item: TThemeDropdownContentItem;
  };
};
