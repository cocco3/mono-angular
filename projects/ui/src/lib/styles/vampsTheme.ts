import { defaultTheme } from './defaultTheme';
import { type UiTheme } from './types';

export const vampsTheme: UiTheme = {
  colors: defaultTheme.colors,

  typography: {
    display: {
      id: 'display',
      family: `'Courier New', Courier, monospace`,
      values: {
        '2xl': { size: '72px', lineHeight: '1.25' },
        xl: { size: '60px', lineHeight: '1.2' },
        lg: { size: '48px', lineHeight: '1.25' },
        md: { size: '36px', lineHeight: '1.22' },
        sm: { size: '30px', lineHeight: '1.27' },
        xs: { size: '24px', lineHeight: '1.25' },
      },
    },
    text: {
      id: 'text',
      family: `Arial, -apple-system, 'Helvetica Neue', sans-serif`,
      values: {
        xl: { size: '20px', lineHeight: '1.5' },
        lg: { size: '18px', lineHeight: '1.56' },
        md: { size: '16px', lineHeight: '1.5' },
        sm: { size: '14px', lineHeight: '1.43' },
        xs: { size: '12px', lineHeight: '1.25' },
        '2xs': { size: '10px', lineHeight: '1.25' },
        '3xs': { size: '8px', lineHeight: '1.25' },
      },
    },
    mono: {
      id: 'mono',
      family: `source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace`,
      values: {
        md: { size: '16px', lineHeight: '1.5' },
        sm: { size: '14px', lineHeight: '1.43' },
      },
    },
  },
};
