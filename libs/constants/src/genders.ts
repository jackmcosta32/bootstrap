export const GENDERS = {
  MAN: 'male',
  WOMAN: 'female',
  OTHER: 'others',
  'NON-BINARY': 'non-binary',
  'NOT-INFORMED': 'not-informed',
} as const;

export type TGender = (typeof GENDERS)[keyof typeof GENDERS];
