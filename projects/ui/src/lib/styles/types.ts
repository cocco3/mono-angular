export type ThemeColorSets = {
  text: {
    id: 'text';
    values: Record<string, [string, string]>;
  };
  border: {
    id: 'border';
    values: Record<string, [string, string]>;
  };
  foreground: {
    id: 'fg';
    values: Record<string, [string, string]>;
  };
  background: {
    id: 'bg';
    values: Record<string, [string, string]>;
  };
  button: {
    id: 'button';
    values: Record<string, [string, string]>;
  };
};

export type ThemeTypographyVariant = {
  size: string;
  lineHeight: string;
};

export type ThemeTypographySize =
  | '3xl'
  | '2xl'
  | 'xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xs'
  | '2xs'
  | '3xs';

export type ThemeTypographySets = {
  display: {
    id: 'display';
    family: string;
    values: Partial<Record<ThemeTypographySize, ThemeTypographyVariant>>;
  };
  text: {
    id: 'text';
    family: string;
    values: Partial<Record<ThemeTypographySize, ThemeTypographyVariant>>;
  };
  mono: {
    id: 'mono';
    family: string;
    values: Partial<Record<ThemeTypographySize, ThemeTypographyVariant>>;
  };
};

export type UiTheme = {
  colors: ThemeColorSets;
  typography: ThemeTypographySets;
};
