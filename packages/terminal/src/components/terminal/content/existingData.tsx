import React from 'react';

import { TerminalContentExistingDataProps, TerminalProps } from '../../../types';
import { Input } from '../input';
import { TextBlock } from '../TextBlock';

export const ExistingData = ({
  data,
  ...rest
}: TerminalContentExistingDataProps & Pick<TerminalProps, 'path'>): JSX.Element => {
  return (
    <>
      <Input {...rest} readOnly={true} autoFocus={false} />
      <TextBlock data={data} />
    </>
  );
};
