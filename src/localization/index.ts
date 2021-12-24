import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./languages/en";
import es from "./languages/es";
import de from "./languages/de";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
    de: {
      translation: de,
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
