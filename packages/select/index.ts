import { selectTheme } from './src';
import { AddTheme } from '@obrigado-senior/theme';
AddTheme && AddTheme({ theme: selectTheme });
export * from './src';
