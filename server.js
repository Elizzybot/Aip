const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sendPairingCode, addUserAsOwner } = require('./whatsappHandler');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

// Serve the homepage with a simple input form
app.get('/', (req, res) => {
    res.send(`
        <html>
        <head><title>WhatsApp Bot Connection</title></head>
        <body>
            <h2>Enter your WhatsApp number to connect:</h2>
            <form action="/pair" method="post">
                <input type="text" name="phoneNumber" placeholder="Enter WhatsApp number" required/>
                <button type="submit">Submit</button>
            </form>
        </body>
        </html>
    `);
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