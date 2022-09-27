import React from 'react';

import { TerminalProps } from '../../../types';
import { TerminalContentExistingDataProps } from '../../../types/components/content';
import { TerminalTextBlockProps } from '../../../types/components/textBlock';
import { Input } from '../input';
import { TextBlock } from '../TextBlock';

export const ExistingData = ({
  data,
  setShowNewData,
  ...rest
}: TerminalContentExistingDataProps &
  Pick<TerminalProps, 'path'> &
  Pick<TerminalTextBlockProps, 'setShowNewData'>): JSX.Element => {
  return (
    <>
      <Input {...rest} readOnly={true} autoFocus={false} />
      <TextBlock data={data} setShowNewData={(bool) => setShowNewData(bool)} />
    </>
  );
};
