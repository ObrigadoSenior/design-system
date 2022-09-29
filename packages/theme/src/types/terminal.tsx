export type ThemeTerminalBaseProps = {
  minWidth: string;
  minHeight: string;
  bgColor: string;
  textColor: string;
  borderColor: string;
};

export type ThemeTerminalTopProps = {
  height: string;
  bgColor: string;
};

export type ThemeTerminalTextBlockProps = {
  fontSize: string;
  fontWeight: string;
  color: string;
};

export type ThemeTerminalProgressBarProps = {
  height: string;
  bgColor: string;
};

export type ThemeTerminalInputProps = {
  pathBgColor: string;
  branchBgColor: string;
  fontSize: string;
  fontWeight: string;
  color: string;
  dateColor: string;
};

export type ThemeTerminalProps = {
  base: ThemeTerminalBaseProps;
  top: ThemeTerminalTopProps;
  textBlock: ThemeTerminalTextBlockProps;
  progressBar: ThemeTerminalProgressBarProps;
  input: ThemeTerminalInputProps;
};
