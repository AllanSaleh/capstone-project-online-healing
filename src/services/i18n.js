import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// "Inline" English and Arabic translations.
// We can localize to any language and any number of languages.
i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: ['en', 'ar'],
    interpolation: {
      escapeValue: false,
    },
    preload: ['en'],
  });
export default i18next;
