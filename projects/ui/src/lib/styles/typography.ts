export const Fonts = {
  display: `Inter, -apple-system, 'Helvetica Neue', sans-serif`,
  body: `Inter, -apple-system, 'Helvetica Neue', sans-serif`,
} as const;
export type Font = keyof typeof Fonts;

export type TypographyVariant = {
  size: string;
  lineHeight: string;
  font: Font;
};

export type TypographySet = {
  name: string;
  id: string;
  values: Record<string, TypographyVariant>;
};

export type Typography = Record<string, TypographySet>;

export const typography: Typography = {
  display: {
    name: 'Display',
    id: 'display',
    values: {
      '2xl': {
        size: '72px',
        lineHeight: '1.25',
        font: 'display',
      },
      xl: {
        size: '60px',
        lineHeight: '1.2',
        font: 'display',
      },
      lg: {
        size: '48px',
        lineHeight: '1.25',
        font: 'display',
      },
      md: {
        size: '36px',
        lineHeight: '1.22',
        font: 'display',
      },
      sm: {
        size: '30px',
        lineHeight: '1.27',
        font: 'display',
      },
      xs: {
        size: '24px',
        lineHeight: '1.33',
        font: 'display',
      },
    },
  },
  text: {
    name: 'Text',
    id: 'text',
    values: {
      xl: {
        size: '20px',
        lineHeight: '1.5',
        font: 'body',
      },
      lg: {
        size: '18px',
        lineHeight: '1.56',
        font: 'body',
      },
      md: {
        size: '16px',
        lineHeight: '1.5',
        font: 'body',
      },
      sm: {
        size: '14px',
        lineHeight: '1.43',
        font: 'body',
      },
      xs: {
        size: '12px',
        lineHeight: '1.5',
        font: 'body',
      },
    },
  },
};
