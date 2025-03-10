
// Import necessary modules
const { XeonBotIncStart } = require('./spiderx'); // Ensure this function exists for bot interaction
const settings = require('./settings');

// Function to send pairing code
async function sendPairingCode(number) {
    const pairingCode = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit code
    await XeonBotIncStart.sendMessage(number + "@s.whatsapp.net", { text: `Your pairing code is: ${pairingCode}` });
    return pairingCode;
}

// Function to add user as owner and premium
async function addUserAsOwner(number) {
    settings.owners.push(number); // Add to owners list
    settings.premium.push(number); // Add to premium list

    // Save settings if required
    require('fs').writeFileSync('./settings.json', JSON.stringify(settings, null, 2));
}

module.exports = { sendPairingCode, addUserAsOwner };
