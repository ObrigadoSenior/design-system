type data = string;

export type TerminalProps = {
  path: string;
  initData: data[];
};

export type TerminalTopPanelProps = {
  title: string;
};

export type TerminalContentProps = Pick<TerminalProps, 'initData' | 'path'>;

export type TerminalContentItemProps = Pick<TerminalProps, 'path'> & {
  setData: (data: data) => void;
};
