
const express = require('express');
const { generatePairCode, addPremiumUser } = require('../invansion');

const app = express();
app.use(express.json());

app.post('/connect', async (req, res) => {
    const { phoneNumber } = req.body;
    if (!phoneNumber) {
        return res.status(400).json({ error: "Phone number is required" });
    }

    try {
        // Generate pair code
        const pairCode = generatePairCode(phoneNumber);
        
        // Send the code via WhatsApp (mocked function, integrate actual sending logic)
        console.log(`Sending pair code ${pairCode} to ${phoneNumber}`);

        // Auto-add user as owner & premium
        addPremiumUser(phoneNumber);

        res.json({ success: true, message: "Pair code sent successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error", details: error.message });
    }
});

module.exports = app;
