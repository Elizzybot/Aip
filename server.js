
// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sendPairingCode, addUserAsOwner } = require('./whatsappHandler');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Serve the homepage with a simple input form
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head><title>WhatsApp Bot Connection</title></head>
        <body>
            <h2>Enter your WhatsApp number to connect:</h2>
            <form action="/connect" method="POST">
                <input type="text" name="number" placeholder="WhatsApp Number" required>
                <button type="submit">Connect</button>
            </form>
        </body>
        </html>
    `);
});

// Handle WhatsApp connection request
app.post('/connect', async (req, res) => {
    const { number } = req.body;
    if (!number) return res.status(400).send("Phone number is required");

    try {
        const pairingCode = await sendPairingCode(number);
        await addUserAsOwner(number);
        res.send(`Pairing code sent to ${number}. You are now the bot owner and a premium user.`);
    } catch (error) {
        res.status(500).send("Error connecting to WhatsApp: " + error.message);
    }
});

module.exports = app;
