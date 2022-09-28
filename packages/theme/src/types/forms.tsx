export type ThemeCheckboxProps = {
  backgroundColor: string;
  disabledBackgroundColor: string;
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
// <-- DROPDOWN

export type ThemeInputProps = {
  backgroundColor: string;
  borderColor: string;
  textColor: string;
  borderRadius: string;
  titleColor: string;
  placeholderColor: string;
  disabledTitleColor: string;
  disabledBackgroundColor: string;
  disabledBorderColor: string;
  disabledTextColor: string;
  padding: {
    withIcon: string;
    noIcon: string;
  };
};

export type ThemeRadioProps = {
  backgroundColor: string;
  disabledBackgroundColor: string;
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
