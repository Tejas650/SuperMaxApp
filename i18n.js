import I18n from 'react-native-i18n';
import en from './locales/english.js';
import hi from './locales/hindi.js';

I18n.defaultLocale = 'en';
I18n.locale = 'en';
I18n.fallbacks = true;
I18n.translations = { en, hi };

export default I18n;
