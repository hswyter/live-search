import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  // https://github.com/i18next/i18next-browser-languageDetector
  .use(initReactI18next)
  // https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    lng: 'de',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;