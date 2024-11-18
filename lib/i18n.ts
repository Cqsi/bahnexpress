import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json';
import translationFI from '../locales/fi/translation.json';

const resources = {
  en: { translation: translationEN },
  fi: { translation: translationFI },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'fi', // Default language
    fallbackLng: 'en', // Fallback language if key not found
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
