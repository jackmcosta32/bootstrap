import 'i18next';

import type resources from '../locales/pt-BR';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof resources.components;
    resources: typeof resources;
  }
}
