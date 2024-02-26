import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import langEN from "./lang/en.json";
import langFR from "./lang/fr.json";

const resources = {
  en: {
    translation: langEN,
  },
  fr: {
    translation: langFR,
  },
};

i18next.use(initReactI18next).init({
  debug: true,
  resources,
  fallbackLng: "en",
  lng: navigator.language.startsWith("fr") ? "fr" : "en",

  // have a common namespace used around the full app
  ns: ["translation"],
  defaultNS: "translation",
});

export default i18next;
