export function calculatePnL({ entryPrice, exitPrice, quantity }) {
  const pnlUSDT = (exitPrice - entryPrice) * quantity;
  const pnlPercent = ((exitPrice - entryPrice) / entryPrice) * 100;

  return {
    pnlUSDT: pnlUSDT.toFixed(2),
    pnlPercent: pnlPercent.toFixed(2)
  };
}
