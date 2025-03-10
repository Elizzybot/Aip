
const fs = require('fs');
const path = require('path');
const dbPath = path.join(__dirname, 'sessions.json');

// Load existing sessions or create an empty file
let sessions = {};
if (fs.existsSync(dbPath)) {
    sessions = JSON.parse(fs.readFileSync(dbPath, 'utf8'));
}

// Save sessions to file
function saveSessions() {
    fs.writeFileSync(dbPath, JSON.stringify(sessions, null, 2));
}

// Add user session
function addUserSession(phoneNumber, pairCode) {
    sessions[phoneNumber] = { pairCode, connected: true };
    saveSessions();
}

// Check if a user is connected
function isUserConnected(phoneNumber) {
    return sessions[phoneNumber] && sessions[phoneNumber].connected;
}

// Remove user session
function removeUserSession(phoneNumber) {
    if (sessions[phoneNumber]) {
        delete sessions[phoneNumber];
        saveSessions();
    }
}

module.exports = { addUserSession, isUserConnected, removeUserSession };
