const express = require('express');
const bodyParser = require('body-parser');
const { runGridBot } = require('./services/gridBot.js');
const { applyStopLoss, applyTrailingStop } = require('./services/riskManagement.js');
const { calculatePnL } = require('./services/profitLoss.js');

const app = express();
app.use(bodyParser.json());

// API برای اجرای ربات گرید
app.post('/start-grid-bot', (req, res) => {
  const { apiKey, apiSecret, pair, range, gridCount, side } = req.body;
  console.log('شروع ربات گرید با اطلاعات:', req.body);

  // در اینجا می‌توانیم اطلاعات حساب را از API XT بگیریم
  runGridBot({ apiKey, apiSecret, pair, range, gridCount, side });
  
  res.json({ message: 'ربات گرید با موفقیت شروع شد' });
});

// API برای محاسبه سود و زیان
app.post('/calculate-pnl', (req, res) => {
  const { entryPrice, exitPrice, quantity } = req.body;
  const pnl = calculatePnL({ entryPrice, exitPrice, quantity });

  res.json(pnl);
});

// راه‌اندازی سرور
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`سرور در پورت ${PORT} در حال اجرا است.`);
});
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const botRoutes = require('./routes/bot');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// استفاده از روت‌ها
app.use('/api', botRoutes);

// سرور شروع به کار می‌کند
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
