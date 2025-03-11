const { Low, JSONFile } = require('lowdb');
const path = require('path');

// Define database file
const dbPath = path.join(__dirname, 'sessions.json');
const adapter = new JSONFile(dbPath);
const db = new Low(adapter);

// Initialize database
async function initDB() {
    await db.read();
    db.data = db.data || { sessions: {} };
    await db.write();
}
initDB();

// Save sessions
async function saveSessions() {
    await db.write();
}

// Add user session
async function addUserSession(phoneNumber, pairCode) {
    db.data.sessions[phoneNumber] = { pairCode, connected: true };
    await saveSessions();
}

// Check if user is connected
function isUserConnected(phoneNumber) {
    return db.data.sessions[phoneNumber]?.connected || false;
}

module.exports = { addUserSession, isUserConnected };