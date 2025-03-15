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

export type Theme = typeof lightTheme;

export const lightTheme = {
  text: {
    name: 'Text' as const,
    id: 'text' as const,
    values: {
      primary: grayLight['900'],
      secondary: grayLight['700'],
      tertiary: grayLight['600'],
      quaternary: grayLight['500'],
      disabled: grayLight['500'],
      placeholder: grayLight['500'],
      brand: purple['900'],
      error: red['600'],
      warning: yellow['600'],
      success: green['600'],
    },
  },
  border: {
    name: 'Border' as const,
    id: 'border' as const,
    values: {
      primary: grayLight['300'],
      secondary: grayLight['200'],
      tertiary: grayLight['100'],
      disabled: grayLight['300'],

      brand: purple['500'],
      'brand-subtle': purple['300'],

      error: red['500'],
      'error-subtle': red['300'],

      warning: yellow['500'],
      'warning-subtle': yellow['300'],

      success: green['500'],
      'success-subtle': green['300'],
    },
  },
  foreground: {
    name: 'Foreground' as const,
    id: 'fg' as const,
    values: {
      primary: grayLight['900'],
      secondary: grayLight['700'],
      tertiary: grayLight['600'],
      disabled: grayLight['400'],

      'brand-primary': purple['600'],
      'brand-secondary': purple['500'],

      'error-primary': red['600'],
      'error-secondary': red['500'],

      'warning-primary': yellow['600'],
      'warning-secondary': yellow['500'],

      'success-primary': green['600'],
      'success-secondary': green['500'],
    },
  },
  background: {
    name: 'Background' as const,
    id: 'bg' as const,
    values: {
      primary: base['white'],
      secondary: grayLight['50'],
      tertiary: grayLight['100'],
      quaternary: grayLight['200'],
      disabled: grayLight['100'],

      'brand-primary': purple['50'],
      'brand-secondary': purple['100'],
      'brand-solid': purple['600'],

      'error-primary': red['50'],
      'error-secondary': red['100'],
      'error-solid': red['600'],

      'warning-primary': yellow['50'],
      'warning-secondary': yellow['100'],
      'warning-solid': yellow['600'],

      'success-primary': green['50'],
      'success-secondary': green['100'],
      'success-solid': green['600'],
    },
  },
  button: {
    name: 'Button',
    id: 'button',
    values: {
      'primary-default-bg': purple[600],
      'primary-default-border': 'transparent',
      'primary-default-text': base['white'],
      'primary-hover-bg': purple[700],

      'secondary-default-bg': base['white'],
      'secondary-default-border': grayLight[300],
      'secondary-default-text': grayLight[700],
      'secondary-hover-bg': grayLight[200],

      'tertiary-default-bg': 'transparent',
      'tertiary-default-border': 'transparent',
      'tertiary-default-text': grayLight[700],
      'tertiary-hover-bg': grayLight[200],

      'destructive-default-bg': red[600],
      'destructive-default-border': 'transparent',
      'destructive-default-text': base['white'],
      'destructive-hover-bg': red[700],
    },
  },
};

export const darkTheme: Theme = {
  text: {
    name: 'Text',
    id: 'text',
    values: {
      primary: grayDark['50'],
      secondary: grayDark['300'],
      tertiary: grayDark['400'],
      quaternary: grayDark['400'],
      disabled: grayDark['500'],
      placeholder: grayDark['400'],
      brand: purple['50'],
      error: red['400'],
      warning: yellow['400'],
      success: green['400'],
    },
  },
  border: {
    name: 'Border',
    id: 'border',
    values: {
      primary: grayDark['700'],
      secondary: grayDark['800'],
      tertiary: grayDark['800'],
      disabled: grayDark['700'],

      brand: purple['400'],
      'brand-subtle': purple['500'],

      error: red['400'],
      'error-subtle': red['500'],

      warning: yellow['400'],
      'warning-subtle': yellow['500'],

      success: green['400'],
      'success-subtle': green['500'],
    },
  },
  foreground: {
    name: 'Foreground',
    id: 'fg',
    values: {
      primary: base.white,
      secondary: grayDark['300'],
      tertiary: grayDark['400'],
      disabled: grayDark['500'],

      'brand-primary': purple['500'],
      'brand-secondary': purple['400'],

      'error-primary': red['500'],
      'error-secondary': red['400'],

      'warning-primary': yellow['500'],
      'warning-secondary': yellow['400'],

      'success-primary': green['500'],
      'success-secondary': green['400'],
    },
  },
  background: {
    name: 'Background',
    id: 'bg',
    values: {
      primary: grayDark['950'],
      secondary: grayDark['900'],
      tertiary: grayDark['800'],
      quaternary: grayDark['700'],
      disabled: grayDark['800'],

      'brand-primary': purple['950'],
      'brand-secondary': purple['600'],
      'brand-solid': purple['600'],

      'error-primary': red['950'],
      'error-secondary': red['600'],
      'error-solid': red['600'],

      'warning-primary': yellow['950'],
      'warning-secondary': yellow['600'],
      'warning-solid': yellow['600'],

      'success-primary': green['950'],
      'success-secondary': green['600'],
      'success-solid': green['600'],
    },
  },
  button: {
    name: 'Button',
    id: 'button',
    values: {
      'primary-default-bg': purple[700],
      'primary-default-border': 'transparent',
      'primary-default-text': grayDark[50],
      'primary-hover-bg': purple[600],

      'secondary-default-bg': grayDark[950],
      'secondary-default-border': grayDark[700],
      'secondary-default-text': grayDark[50],
      'secondary-hover-bg': grayDark[700],

      'tertiary-default-bg': 'transparent',
      'tertiary-default-border': 'transparent',
      'tertiary-default-text': grayDark[50],
      'tertiary-hover-bg': grayDark[700],

      'destructive-default-bg': red[700],
      'destructive-default-border': 'transparent',
      'destructive-default-text': grayDark[50],
      'destructive-hover-bg': red[600],
    },
  },
};
