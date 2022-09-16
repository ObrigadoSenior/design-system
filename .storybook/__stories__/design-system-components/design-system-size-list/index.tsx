import { fontSize, weight } from '../../../../utils';
import { map } from 'ramda';
import React, { CSSProperties } from 'react';
import { IStoriesSizes } from '../../../storiesTheme/storiesSizes';
import { DesignSystemListItem } from '../design-system-list-item';
import { StoriesSection } from '../design-system-section';

export interface IStoriesSizeList {
  header: string;
  list: IStoriesSizes[];
  type: 'size' | 'borderRadius' | 'fontSize' | 'fontWeight';
}

interface IStyleProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  fontWeight?: number;
  fontSize?: string;
}

const getStyle = (type: IStoriesSizeList['type'], value: string): IStyleProps => (
  type !== 'size' ? { [type]: value } : { width: value, height: value}
);

export const StoriesSizeList = ({ header, list, type }: IStoriesSizeList): JSX.Element => {
  const showBox = type === 'size' || type === 'borderRadius';
  const renderList = map(({ name = '', size = '', title = '', usage = ''}) => {
    const style = getStyle(type, size) as CSSProperties;
    console.log('size', size);
    
    const content = (
      <li key={title + name} className="stories--list--item">
        {showBox && <span className="--box" style={style} />}
        <DesignSystemListItem
          name={title}
          description={usage}
          mainBtn={{
            value: size,
          }}
          weight={name as weight}
          size={name as fontSize}
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
