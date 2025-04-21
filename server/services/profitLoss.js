function calculateProfitLoss(entryPrice, currentPrice, amount, side) {
  let profitLoss = 0;

  if (side === 'long') {
    profitLoss = (currentPrice - entryPrice) * amount;
  } else if (side === 'short') {
    profitLoss = (entryPrice - currentPrice) * amount;
  }

  const profitLossPercentage = (profitLoss / (entryPrice * amount)) * 100;

  return { profitLoss, profitLossPercentage };
}

module.exports = { calculateProfitLoss };
