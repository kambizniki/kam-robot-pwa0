// i18n.js

let lang = localStorage.getItem('lang') || 'en';

export async function t(key) {
  try {
    const res = await fetch(`/locales/${lang}.json`);
    const dict = await res.json();
    return dict[key] || key;
  } catch (err) {
    console.error('Translation load error:', err);
    return key;
  }
}

export function setLanguage(newLang) {
  lang = newLang;
  localStorage.setItem('lang', newLang);
  document.documentElement.lang = newLang;
  document.documentElement.dir = newLang === 'fa' ? 'rtl' : 'ltr';
}
