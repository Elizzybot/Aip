const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { sendPairingCode, addUserAsOwner } = require('./whatsappHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Serve index.html directly without needing a folder
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, 'index.html');
    
    // Check if the file exists before serving
    if (fs.existsSync(filePath)) {
        res.sendFile(filePath);
    } else {
        res.status(404).send("index.html not found. Make sure it's in the same directory as server.js.");
    }
});

// Handle pairing request
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

// Start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});