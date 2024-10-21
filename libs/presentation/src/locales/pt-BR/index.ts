import { pages } from './pages';
import { layouts } from './layouts';
import { components } from './components';
import { fields } from './fields-locales';
import { validations } from './validations-locales';
import { placeholders } from './placeholders-locales';

export default {
  ...pages,
  ...layouts,
  ...components,
  fields: fields,
  validations: validations,
  placeholders: placeholders,
};
