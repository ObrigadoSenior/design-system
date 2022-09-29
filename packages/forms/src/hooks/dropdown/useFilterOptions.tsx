import { useCallback, useState } from 'react';
import { DropdownOptionProps, UseFilterOptions } from '../../types/components/dropdown';

export const useFilterOptions = ({
  options,
}: UseFilterOptions): {
  activeOption: DropdownOptionProps | null;
  filteredOptions: DropdownOptionProps[];
  onSetFilteredOptions: (value: string) => void;
  onClickFilterOptions: (pickedId: string) => void;
} => {
  const [filteredOptions, setFilteredOptions] = useState<UseFilterOptions['options']>(options);
  const [activeOption, setActiveOption] = useState<DropdownOptionProps | null>(null);

  const onSetFilteredOptions = useCallback((value: string) => {
    const newOptions = filteredOptions.filter(({ title = '' }) => {
      const val = title.toLowerCase();
      return val.includes(value);
    });
    if (newOptions) setFilteredOptions(newOptions);
  }, []);

  const onClickFilterOptions = useCallback((pickedId: string) => {
    const index = filteredOptions.findIndex(({ id }) => id === pickedId);
    if (filteredOptions && filteredOptions[index]) {
      setActiveOption(filteredOptions[index]);
    }
  }, []);

  return { activeOption, filteredOptions, onSetFilteredOptions, onClickFilterOptions };
};
