import { colorPrimitives } from './colorPrimitives';
import type { UiTheme } from './types';

const {
  base: { values: base },
  grayLight: { values: grayLight },
  grayDark: { values: grayDark },
  purple: { values: purple },
  red: { values: red },
  yellow: { values: yellow },
  green: { values: green },
  blue: { values: blue },
} = colorPrimitives;

export const defaultTheme: UiTheme = {
  colors: {
    text: {
      id: 'text',
      values: {
        primary: [grayLight['900'], grayDark['50']],
        secondary: [grayLight['700'], grayDark['300']],
        tertiary: [grayLight['600'], grayDark['400']],
        quaternary: [grayLight['500'], grayDark['400']],
        disabled: [grayLight['500'], grayDark['500']],
        placeholder: [grayLight['500'], grayDark['400']],
        brand: [purple['900'], purple['50']],
        error: [red['600'], red['400']],
        warning: [yellow['600'], yellow['400']],
        success: [green['600'], green['400']],
        info: [blue['600'], blue['400']],
      },
    },
    border: {
      id: 'border',
      values: {
        primary: [grayLight['300'], grayDark['700']],
        secondary: [grayLight['200'], grayDark['800']],
        tertiary: [grayLight['100'], grayDark['800']],
        disabled: [grayLight['300'], grayDark['700']],

        brand: [purple['500'], purple['400']],
        'brand-subtle': [purple['300'], purple['500']],

        error: [red['500'], red['400']],
        'error-subtle': [red['300'], red['500']],

        warning: [yellow['500'], yellow['400']],
        'warning-subtle': [yellow['300'], yellow['500']],

        success: [green['500'], green['400']],
        'success-subtle': [green['300'], green['500']],

        info: [blue['500'], blue['400']],
        'info-subtle': [blue['300'], blue['500']],
      },
    },
    foreground: {
      id: 'fg',
      values: {
        primary: [grayLight['900'], base.white],
        secondary: [grayLight['700'], grayDark['300']],
        tertiary: [grayLight['600'], grayDark['400']],
        disabled: [grayLight['400'], grayDark['500']],

        'brand-primary': [purple['600'], purple['500']],
        'brand-secondary': [purple['500'], purple['400']],

        'error-primary': [red['600'], red['500']],
        'error-secondary': [red['500'], red['400']],

        'warning-primary': [yellow['600'], yellow['500']],
        'warning-secondary': [yellow['500'], yellow['400']],

        'success-primary': [green['600'], green['500']],
        'success-secondary': [green['500'], green['400']],

        'info-primary': [blue['600'], blue['500']],
        'info-secondary': [blue['500'], blue['400']],
      },
    },
    background: {
      id: 'bg',
      values: {
        primary: [base['white'], grayDark['950']],
        secondary: [grayLight['50'], grayDark['900']],
        tertiary: [grayLight['100'], grayDark['800']],
        quaternary: [grayLight['200'], grayDark['700']],
        disabled: [grayLight['100'], grayDark['800']],

        'brand-primary': [purple['50'], purple['950']],
        'brand-secondary': [purple['100'], purple['600']],
        'brand-solid': [purple['600'], purple['600']],

        'error-primary': [red['50'], red['950']],
        'error-secondary': [red['100'], red['600']],
        'error-solid': [red['600'], red['600']],

        'warning-primary': [yellow['50'], yellow['950']],
        'warning-secondary': [yellow['100'], yellow['600']],
        'warning-solid': [yellow['600'], yellow['600']],

        'success-primary': [green['50'], green['950']],
        'success-secondary': [green['100'], green['600']],
        'success-solid': [green['600'], green['600']],

        'info-primary': [blue['50'], blue['950']],
        'info-secondary': [blue['100'], blue['600']],
        'info-solid': [blue['600'], blue['600']],
      },
    },
    button: {
      id: 'button',
      values: {
        'primary-default-bg': [purple[600], purple[700]],
        'primary-default-border': ['transparent', 'transparent'],
        'primary-default-text': [base['white'], grayDark[50]],
        'primary-hover-bg': [purple[700], purple[600]],

        'secondary-default-bg': [base['white'], grayDark[950]],
        'secondary-default-border': [grayLight[300], grayDark[700]],
        'secondary-default-text': [grayLight[700], grayDark[50]],
        'secondary-hover-bg': [grayLight[200], grayDark[700]],

        'tertiary-default-bg': ['transparent', 'transparent'],
        'tertiary-default-border': ['transparent', 'transparent'],
        'tertiary-default-text': [grayLight[700], grayDark[50]],
        'tertiary-hover-bg': [grayLight[200], grayDark[700]],

        'destructive-default-bg': [red[600], red[700]],
        'destructive-default-border': ['transparent', 'transparent'],
        'destructive-default-text': [base['white'], grayDark[50]],
        'destructive-hover-bg': [red[700], red[600]],
      },
    },
  },

  typography: {
    display: {
      id: 'display',
      family: `Inter, -apple-system, 'Helvetica Neue', sans-serif`,
      values: {
        '2xl': { size: '72px', lineHeight: '1.25' },
        xl: { size: '60px', lineHeight: '1.2' },
        lg: { size: '48px', lineHeight: '1.25' },
        md: { size: '36px', lineHeight: '1.22' },
        sm: { size: '30px', lineHeight: '1.27' },
        xs: { size: '24px', lineHeight: '1.33' },
      },
    },
    text: {
      id: 'text',
      family: `Inter, -apple-system, 'Helvetica Neue', sans-serif`,
      values: {
        xl: { size: '20px', lineHeight: '1.5' },
        lg: { size: '18px', lineHeight: '1.56' },
        md: { size: '16px', lineHeight: '1.5' },
        sm: { size: '14px', lineHeight: '1.43' },
        xs: { size: '12px', lineHeight: '1.5' },
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
