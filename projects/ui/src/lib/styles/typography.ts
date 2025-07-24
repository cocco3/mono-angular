type TypographyVariant = {
  size: string;
  lineHeight: string;
};

type TypographySize =
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'
  | '2xs'
  | '3xs';

export type TypographySets = {
  display: {
    id: 'display';
    family: string;
    values: Partial<Record<TypographySize, TypographyVariant>>;
  };
  text: {
    id: 'text';
    family: string;
    values: Partial<Record<TypographySize, TypographyVariant>>;
  };
  mono: {
    id: 'mono';
    family: string;
    values: Partial<Record<TypographySize, TypographyVariant>>;
  };
};

export const typographyDictionary = {
  display: {
    name: 'Display',
    description:
      'Use for headings, hero text, or any large attention-grabbing text.',
  },
  text: {
    name: 'Text',
    description:
      'Use for paragraphs, descriptions, UI labels, and when readability is key.',
  },
  mono: {
    name: 'Monospace',
    description:
      'Use for for code, structured data, or when visual alignment is important.',
  },
} satisfies Record<keyof TypographySets, { name: string; description: string }>;

export const defaultThemeTypography: TypographySets = {
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
};
