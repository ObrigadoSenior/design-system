import { ComponentPropsWithoutRef } from 'react';
import { fontSize, fontStyle, type, weight } from '../../../../../utils';

type TxtPProps = ComponentPropsWithoutRef<'p'>;
type TxtAProps = ComponentPropsWithoutRef<'a'>;
type TxtSpanProps = ComponentPropsWithoutRef<'span'>;
type TxtHeaderProps = ComponentPropsWithoutRef<'h1'>;

interface DefaultTextProps {
  children: string;
  size?: fontSize;
  weight?: weight;
  type?: type;
  fontStyle?: fontStyle;
  className?: string;
}

type ConditionalProps =
  | (TxtPProps & {
      tag?: 'p';
    })
  | (TxtAProps & {
      tag?: 'a';
    })
  | (TxtSpanProps & {
      tag?: 'span';
    })
  | (TxtHeaderProps & {
      tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    });

export type TextProps = DefaultTextProps & ConditionalProps;
