import { translations } from './translations.js';

let currentLang = localStorage.getItem('lang') || 'en';

export function t(key) {
  return translations[currentLang][key] || key;
}

export function toggleLang() {
  currentLang = currentLang === 'en' ? 'fa' : 'en';
  localStorage.setItem('lang', currentLang);
  location.reload(); // بازنشانی زبان
}

export function getCurrentLang() {
  return currentLang;
}
