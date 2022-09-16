import React, { useState } from 'react';
import { ITabOption, ITabProps } from '../../models';
import { TabOptions } from './tabOptions';
import './tabStyle.css';

export const Tab = ({ className = '', options, onOptionClick, activeOption }: ITabProps): JSX.Element => {
  const defActiveOpt = activeOption || (options ? options[0] : undefined);
  const [active, setActive] = useState<ITabOption | undefined>(defActiveOpt);

  return (
    <ul data-testid="tab" className={`tab-wrapper ${className}`}>
      {options && (
        <TabOptions
          onOptionsClick={(option) => {
            onOptionClick(option);
            setActive(option);
          }}
          options={options}
          activeOption={active}
        />
      )}
    </ul>
  );
};
