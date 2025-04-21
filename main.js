// main.js

// بررسی پشتیبانی از PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker Registered:', registration);
      })
      .catch(error => {
        console.log('Service Worker Registration Failed:', error);
      });
  });
}

// تابع تغییر حالت شب و روز
function toggleDarkMode() {
  const currentMode = localStorage.getItem('theme');
  if (currentMode === 'dark') {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}

// بارگذاری حالت فعلی (شب یا روز)
function loadTheme() {
  const currentMode = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentMode);
}

// فراخوانی تابع تغییر حالت
loadTheme();

// مدیریت چند حساب XT
const accounts = []; // برای ذخیره اطلاعات حساب‌ها

function addAccount(accountInfo) {
  accounts.push(accountInfo);
  updateAccountList();
}

function updateAccountList() {
  const accountListElement = document.getElementById('account-list');
  accountListElement.innerHTML = ''; // پاک کردن قبلی
  accounts.forEach(account => {
    const accountElement = document.createElement('li');
    accountElement.textContent = `${account.name} - ${account.balance} USDT`;
    accountListElement.appendChild(accountElement);
  });
}

// مثال: اضافه کردن یک حساب جدید
addAccount({ name: 'XT Account 1', balance: 50 });

// تنظیمات ربات گرید
const gridSettings = {
  pair: 'BNB/USDT',
  range: { min: 464, max: 745 },
  leverage: 10,
  stopLoss: 5, // درصد
  takeProfit: 10 // درصد
};

// نمایش تنظیمات ربات گرید
function displayGridSettings() {
  const gridSettingsElement = document.getElementById('grid-settings');
  gridSettingsElement.innerHTML = `
    <h3>تنظیمات ربات گرید</h3>
    <p>جفت‌ارز: ${gridSettings.pair}</p>
    <p>محدوده قیمتی: ${gridSettings.range.min} تا ${gridSettings.range.max}</p>
    <p>لوریج: ${gridSettings.leverage}X</p>
    <p>استاپ لاس: ${gridSettings.stopLoss}%</p>
    <p>تیک پرافیت: ${gridSettings.takeProfit}%</p>
  `;
}

// نمایش تنظیمات در صفحه
displayGridSettings();
import { createXTAuthForm } from './components/XTAuthForm.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.appendChild(createXTAuthForm());
});
