import { getRelativeLocaleUrl } from "astro:i18n";
import { ui, defaultLang, headerOptions } from "./content";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

export function getHeaderOptions(lang: keyof typeof ui) {
  return headerOptions.map((option) => ({
    href: getRelativeLocaleUrl(lang, option.href),
    text: option.label[lang],
    target: option.target,
  }));
}
