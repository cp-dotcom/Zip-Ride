"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation files to avoid network requests during build/server-side
import enTranslation from "../public/locales/en/translation.json";
import hiTranslation from "../public/locales/hi/translation.json";
import mlTranslation from "../public/locales/ml/translation.json";

const isServer = typeof window === "undefined";

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: false,
    resources: isServer ? {
      en: { translation: enTranslation },
      hi: { translation: hiTranslation },
      ml: { translation: mlTranslation },
    } : undefined,
    interpolation: { escapeValue: false },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json",
    },
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      lookupLocalStorage: "i18nextLng",
      caches: ["localStorage"],
    },
  });

export default i18n;
