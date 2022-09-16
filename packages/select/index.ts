import { selectTheme } from './src';
import { AddTheme } from '@obrigadosenior/theme';
AddTheme && AddTheme({ theme: selectTheme });
export * from './src';
