function checkStopLoss(entryPrice, currentPrice, stopLossPercent, side) {
  const lossThreshold = entryPrice * (1 - stopLossPercent / 100);
  const hitStopLoss = side === 'long'
    ? currentPrice <= lossThreshold
    : currentPrice >= entryPrice * (1 + stopLossPercent / 100);
  return hitStopLoss;
}

function checkTrailingStop(entryPrice, currentPrice, trailingPercent, maxProfitPrice, side) {
  if (side === 'long') {
    const triggerPrice = maxProfitPrice * (1 - trailingPercent / 100);
    return currentPrice <= triggerPrice;
  } else {
    const triggerPrice = maxProfitPrice * (1 + trailingPercent / 100);
    return currentPrice >= triggerPrice;
  }
}

module.exports = { checkStopLoss, checkTrailingStop };
