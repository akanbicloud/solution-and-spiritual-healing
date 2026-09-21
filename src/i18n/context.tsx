"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, translations, supportedLocales } from "./translations";

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (section: keyof typeof translations.en, key: string) => string;
  dir: "ltr" | "rtl";
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const saved = localStorage.getItem("alfacairo_locale") as Locale;
    if (saved && ["en", "ar", "yo", "ha"].includes(saved)) {
      setLocaleState(saved);
      document.documentElement.lang = saved;
      document.documentElement.dir = saved === "ar" ? "rtl" : "ltr";
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem("alfacairo_locale", newLocale);
    document.documentElement.lang = newLocale;
    document.documentElement.dir = newLocale === "ar" ? "rtl" : "ltr";
  };

  const t = (section: keyof typeof translations.en, key: string): string => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dict = (translations[locale] as any)?.[section] || (translations.en as any)[section];
    if (dict && dict[key]) {
      return dict[key];
    }
    return key;
  };

  const currentInfo = supportedLocales.find((l) => l.code === locale);
  const dir = currentInfo?.dir || "ltr";

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
