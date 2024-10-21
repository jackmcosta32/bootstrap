import i18n, { InitOptions } from 'i18next';
import { DEFAULTS } from '../configs/defaults';
import { initReactI18next } from 'react-i18next';
import languageDetector from 'i18next-browser-languagedetector';

export { useTranslation } from 'react-i18next';

export function initializeI18n(options: InitOptions) {
  if (i18n.isInitialized) return i18n.t;

  const initializeOptions = Object.assign(
    {
      keySeparator: false,
      fallbackLng: DEFAULTS.LOCALE,
      interpolation: { escapeValue: false },
      debug: process.env['NODE_ENV'] === 'development',
    },
    options
  );

  return i18n
    .use(initReactI18next)
    .use(languageDetector)
    .init(initializeOptions);
}

export const t = i18n.t;

export default i18n;
