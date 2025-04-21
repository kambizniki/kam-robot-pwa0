const express = require('express');
const router = express.Router();
const { startGridBot } = require('../services/gridBotEngine');

// POST /start-grid-bot
router.post('/start-grid-bot', async (req, res) => {
  try {
    const { apiKey, apiSecret, pair, range, gridCount, side } = req.body;

    // شروع ربات
    await startGridBot(apiKey, apiSecret, pair, range, gridCount, side);

    res.json({ message: 'Grid bot started successfully.' });
  } catch (error) {
    console.error('Error starting grid bot:', error);
    res.status(500).json({ message: 'Failed to start grid bot.' });
  }
});

module.exports = router;
