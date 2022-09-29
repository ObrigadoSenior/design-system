export type ThemeCheckboxProps = {
  bgColor: string;
  disabledBgColor: string;
  checkmarkColor: string;
  hoverColor: string;
  labelColor: string;
  disabledLabelColor: string;
  borderRadius: string;
  borderColor: string;
  disabledBorderColor: string;
};

// --> DROPDOWN
export type ThemeDropdownContentProps = {
  borderRadius: string;
  height: string;
  transitionSpeed: string;
  bgColor: string;
};

type ThemeDropdownItemProps = {
  bgColor: string;
  borderColor: string;
  textColor: string;
  iconColor: string;
  height: string;
};

export type ThemeDropdownContentItemProps = {
  neutral: ThemeDropdownItemProps;
  active: ThemeDropdownItemProps;
  disabled: ThemeDropdownItemProps;
};

export type ThemeDropdownProps = {
  content: ThemeDropdownContentProps;
  items: ThemeDropdownContentItemProps;
};
// <-- DROPDOWN

export type ThemeInputProps = {
  bgColor: string;
  borderColor: string;
  textColor: string;
  borderRadius: string;
  titleColor: string;
  placeholderColor: string;
  disabledTitleColor: string;
  disabledBgColor: string;
  disabledBorderColor: string;
  disabledTextColor: string;
  paddingWithIcon: string;
  paddingWithoutIcon: string;
};

export type ThemeRadioProps = {
  bgColor: string;
  disabledBgColor: string;
  checkmarkColor: string;
  hoverColor: string;
  labelColor: string;
  disabledLabelColor: string;
  borderRadius: string;
  borderColor: string;
  disabledBorderColor: string;
};

export type ThemeFormsProps = {
  input?: ThemeInputProps;
  dropdown?: ThemeDropdownProps;
  checkbox?: ThemeCheckboxProps;
  radio?: ThemeRadioProps;
};
