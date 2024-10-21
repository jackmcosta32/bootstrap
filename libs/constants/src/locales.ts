export const LOCALES = {
  PT_BR: 'pt-BR',
  EN_US: 'en-US',
} as const;

export type TLocale = (typeof LOCALES)[keyof typeof LOCALES];
