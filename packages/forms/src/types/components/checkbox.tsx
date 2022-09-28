export type CheckboxProps = {
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  checked?: boolean;
  className?: string;
};
