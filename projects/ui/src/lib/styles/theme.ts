import { colorPrimitives } from './colorPrimitives';

const {
  base: { values: base },
  grayLight: { values: grayLight },
  grayDark: { values: grayDark },
  purple: { values: purple },
  red: { values: red },
  yellow: { values: yellow },
  green: { values: green },
} = colorPrimitives;

export type Theme = typeof defaultThemeColors;

export const defaultThemeColors = {
  text: {
    name: 'Text' as const,
    id: 'text' as const,
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
    },
  },
  border: {
    name: 'Border' as const,
    id: 'border' as const,
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
    },
  },
  foreground: {
    name: 'Foreground' as const,
    id: 'fg' as const,
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
    },
  },
  background: {
    name: 'Background' as const,
    id: 'bg' as const,
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
    },
  },
  button: {
    name: 'Button' as const,
    id: 'button' as const,
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
};
