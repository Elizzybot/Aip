const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

// Replace these with your actual Telegram bot token and chat ID
const TELEGRAM_BOT_TOKEN = "YOUR_TELEGRAM_BOT_TOKEN";
const TELEGRAM_CHAT_ID = "YOUR_CHAT_ID";

app.use(express.json());

// Get user's IP address (Fix for Vercel)
app.get('/get-ip', (req, res) => {
    const ip = req.ip || req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.json({ ip });
});

// Send IP to Telegram
app.post('/send-ip', async (req, res) => {
    const { ip } = req.body;
    if (!ip) return res.status(400).send("No IP found");

    const message = `New visitor IP: ${ip}`;
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

    try {
        await axios.post(telegramUrl, {
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
        });
        res.send("IP sent to Telegram");
    } catch (error) {
        console.error("Failed to send message:", error);
        res.status(500).send("Error sending IP to Telegram");
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Vercel configuration
module.exports = app;
