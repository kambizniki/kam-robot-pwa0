const WebSocket = require('ws');

// اتصال به WebSocket Binance برای دریافت قیمت بایننس
const socket = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');

// این تابع هر بار که داده جدیدی دریافت شد اجرا می‌شود
socket.onmessage = function(event) {
  const data = JSON.parse(event.data);
  const price = parseFloat(data.p); // قیمت معامله

  console.log('Current Price: ', price);

  // اینجا می‌توانید شبیه‌سازی معاملات را بر اساس قیمت دریافت شده شروع کنید
  simulateTrade(price);
};

// شبیه‌سازی روند خرید و فروش (یک تابع ساده برای مثال)
function simulateTrade(currentPrice) {
  // فرض کنید استراتژی گرید اینگونه است:
  const buyPrice = 500;  // قیمت خرید فرضی
  const sellPrice = 550; // قیمت فروش فرضی

  if (currentPrice <= buyPrice) {
    console.log(`Buying at ${currentPrice}`);
  } else if (currentPrice >= sellPrice) {
    console.log(`Selling at ${currentPrice}`);
  }
}
