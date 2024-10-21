import locales from '../locales';
import i18n, { initializeI18n } from '../libs/i18n';

initializeI18n({ resources: locales });

export default i18n;
