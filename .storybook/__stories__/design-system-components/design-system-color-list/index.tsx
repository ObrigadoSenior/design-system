import { map } from 'ramda';
import React from 'react';
import { IStoriesColors } from '../../../storiesTheme/storiesColors';
import { Break } from '../../design-system-utils';
import { DesignSystemListItem } from '../design-system-list-item';
import { StoriesSection } from '../design-system-section';

export interface IStoriesColorList {
  header: string;
  list: IStoriesColors[];
}

export const StoriesColorList = ({ header, list }: IStoriesColorList): JSX.Element => {
  const renderList = map(({ name, hex = '---', rgba = '---', title = '', usage = '', breakTitle = '', breakDescription }) => {
    if (breakTitle && breakDescription) {
      return <Break key={hex || name} title={breakTitle} subTitle={breakDescription} />;
    }
    const content = (
      <li key={hex || rgba} className="stories--list--item">
        <span className="--box" style={{ backgroundColor: hex }} />
        <DesignSystemListItem
          name={title}
          description={usage}
          mainBtn={{ value: hex, message: { bgColor: hex } }}
          secondaryBtn={{ value: rgba, message: { bgColor: rgba } }}
        />
      </li>
    );

    return content;
  }, list);

  return (
    <StoriesSection header={header}>
      <ul className="stories--list--wrapper">{renderList}</ul>
    </StoriesSection>
  );
};
