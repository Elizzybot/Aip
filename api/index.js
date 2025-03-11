const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { sendPairingCode, addUserAsOwner } = require('../whatsappHandler');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Serve index.html (for frontend)
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '..', 'index.html');

    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send("index.html not found. Make sure it's in the root directory.");
    }
});

// Handle pairing request (WhatsApp connection)
app.post('/pair', async (req, res) => {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
        return res.status(400).send("Phone number is required.");
    }

    try {
        const pairCode = await sendPairingCode(phoneNumber);
        await addUserAsOwner(phoneNumber, pairCode);
        res.send(`Pairing code sent to ${phoneNumber}. Check WhatsApp to complete connection.`);
    } catch (error) {
        console.error("Error pairing user:", error);
        res.status(500).send("Failed to pair. Please try again.");
    }
});

// Export the handler for Vercel
module.exports = app;