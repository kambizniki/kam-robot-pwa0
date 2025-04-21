export function runGridBot({ apiKey, apiSecret, pair, range, gridCount, side }) {
  console.log(`اجرای ربات گرید برای ${pair} (${side})`);

  const priceStep = (range.max - range.min) / gridCount;
  const orders = [];

  for (let i = 0; i < gridCount; i++) {
    const price = side === 'long'
      ? range.min + i * priceStep
      : range.max - i * priceStep;

    const orderType = side === 'long' ? 'buy' : 'sell';

    orders.push({
      symbol: pair,
      price: price.toFixed(2),
      side: orderType,
      quantity: 1, // بعداً بر اساس موجودی حساب محاسبه می‌شود
    });
  }

  console.log('سفارشات گرید ساخته شد:', orders);

  // شبیه‌سازی ارسال سفارش به XT (بعداً با fetch به بک‌اند یا API واقعی وصل می‌شود)
  setTimeout(() => {
    alert(`ربات گرید برای ${pair} با ${gridCount} سفارش ${side === 'long' ? 'خرید' : 'فروش'} اجرا شد.`);
  }, 1000);
}
