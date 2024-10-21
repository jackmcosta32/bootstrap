import 'react-i18next';

import type resources from '../locales/pt-BR';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof resources.components;
    resources: typeof resources;
  }
}
