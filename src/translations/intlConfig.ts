import { createIntl, createIntlCache, IntlProvider } from 'react-intl';
import en from './en.json';
import pt from './pt.json';

const messages = {
  en,
  pt,
};

const cache = createIntlCache();

const intl = createIntl(
  {
    locale: 'en',
    messages: messages['en'],
  },
  cache
);

export { IntlProvider, intl, messages };