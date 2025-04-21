async function startGridBot(apiKey, apiSecret, pair, range, gridCount, side) {
  const response = await fetch('https://your-server-url.com/start-grid-bot', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ apiKey, apiSecret, pair, range, gridCount, side })
  });

  const data = await response.json();
  console.log(data.message);
}

// فراخوانی از کلاینت
startGridBot('your-api-key', 'your-api-secret', 'BNB/USDT', { min: 464, max: 745 }, 10, 'long');
