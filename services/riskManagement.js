export function applyStopLoss({ entryPrice, stopLossPercent }) {
  const stopLossPrice = entryPrice * (1 - stopLossPercent / 100);
  return stopLossPrice.toFixed(2);
}

export function applyTrailingStop({ currentPrice, trailingPercent, lastPeak }) {
  const trailingStopPrice = lastPeak * (1 - trailingPercent / 100);
  const isTriggered = currentPrice < trailingStopPrice;
  return { trailingStopPrice: trailingStopPrice.toFixed(2), isTriggered };
}
