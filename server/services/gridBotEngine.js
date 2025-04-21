const { checkStopLoss, checkTrailingStop } = require('./riskManagement');
const { calculateProfitLoss } = require('./profitLoss');

// تابع شبیه‌سازی اجرای ربات گرید
async function startGridBot(apiKey, apiSecret, pair, range, gridCount, side) {
  console.log(`Starting grid bot for ${pair} (${side}) between ${range.min} and ${range.max}`);

  const entryPrice = (range.min + range.max) / 2;
  const amountPerGrid = 1; // مقدار سرمایه هر گرید
  let maxProfitPrice = entryPrice;

  for (let i = 0; i < gridCount; i++) {
    const simulatedPrice = simulatePrice(range, i, gridCount);
    const { profitLoss, profitLossPercentage } = calculateProfitLoss(entryPrice, simulatedPrice, amountPerGrid, side);
    const hitSL = checkStopLoss(entryPrice, simulatedPrice, 5, side);
    const hitTS = checkTrailingStop(entryPrice, simulatedPrice, 3, maxProfitPrice, side);

    if (simulatedPrice > maxProfitPrice) maxProfitPrice = simulatedPrice;

    console.log(`Grid ${i + 1}: Price=${simulatedPrice}, P/L=${profitLoss.toFixed(2)} USDT (${profitLossPercentage.toFixed(2)}%)`);

    if (hitSL) {
      console.log('Stop loss triggered. Exiting bot.');
      break;
    }

    if (hitTS) {
      console.log('Trailing stop triggered. Taking profit.');
      break;
    }
  }

  console.log('Grid bot finished.');
}

// تابع شبیه‌سازی قیمت در هر گرید
function simulatePrice(range, index, total) {
  const step = (range.max - range.min) / total;
  return range.min + index * step;
}

module.exports = { startGridBot };
