export const THEME_MODES = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export type TThemeModes = (typeof THEME_MODES)[keyof typeof THEME_MODES];
