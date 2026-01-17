const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    // ──────────────── Core Settings ────────────────
    SESSION_ID: process.env.SESSION_ID || "GURU~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0x1YzFqMkl4MGVTbjloMXp1bUdCbTEzVjdMVmJ5dnVMZHJiaXpQWmxIZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVZTejFWb05vOGNJVVRGcTRFeHNUQVk3UWdPbmxPRlIwME03OHZaSU5FZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1QlluUzBYYXNXeEs5cjlwRGpYUVhkT0pFejBhZ3k0eGJvSmVPNW55eEVjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwbUFSb0tqd1J2SDM2MFYwYk5pT1RtUjc1NVRTLytEeldvdE9CY1ZHVGgwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklIOWEwTm41TWhDRmtCWWNCdEV6YmNyT2pkZmhMTjB2eWFRd21MeHhwbGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkhXNXZ3ZEJlTDNOQWpka2huQkNaRjNEUHB0UTVvTkphbGRFalppRk1ZRmc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xLM3hjRW5MYTJEenE0aG5QbC9la2NTKzJtUDhZY2pZdnVXdCtZQUdYRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGtiYmJuTjl3OHJ2WUpXZHh5NXdVc2hOK1MrV1RnVU5HakdCb285VDkxUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlY3MkRkZjlYbHhxc3dUQURXU0FuTkJoN1o5WDdnMjRUbENXRmpGQllidTUyYjZHUzAvemd3c2N1MXNKU2xrSnZHZU1ZMi9KUGpNbmVSbFRRbXBHMEN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6Ikh5Y04vcDk5c0R1bFZqTndLZWxtb1FkcmVndHBDNVlpbUtQemY2ME9WTEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiR1VSVVhCT1QiLCJtZSI6eyJpZCI6IjI1NTY3OTY5NTMxMTo4MkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjU3NzcyMDU4MDk5ODg4OjgyQGxpZCIsIm5hbWUiOiIyNTU2Nzk2OTUzMTEifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pTcnZKb0ZFSy9zcjhzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImZxZml4T0libmVkUit0UTU5ckp1SG5kUzRuUXk0U0NZTkJtTVhjNS96REE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjQ0VDBRSStJN0pxQ2JETzQwaElGTkRUYUJSNkVldmswb3lPaUFQVFA1VHd3L1lQcGRPelN5STZwc1BtL2hHU2JVZjNGbDVqNmwxZnV4UWtzb0dua0N3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJOUVIvd1ZHeVZlUS9YRzRtdXhaU0pNMDQwYjZpUVIrcWRQYzh0cHc5ZDJjclpqU0pUd0hkSnFXMkYwZHNoWDUvVlROV2FLOEt3eTRDYUwxNzJJbDlCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NTY3OTY5NTMxMTo4MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYNm40c1RpRzUzblVmclVPZmF5Ymg1M1V1SjBNdUVnbURRWmpGM09mOHd3In19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRFFnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3Njg2ODMwNjksImxhc3RQcm9wSGFzaCI6IjJHNEFtdSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBS0pEIn0=",
    PREFIX: process.env.PREFIX || ".",
    BOT_NAME: process.env.BOT_NAME || "GURU MD",
    STICKER_NAME: process.env.STICKER_NAME || "GURU MD",
    OWNER_NUMBER: process.env.OWNER_NUMBER || "255679695311",
    OWNER_NAME: process.env.OWNER_NAME || "Ahmed",
    DEV: process.env.DEV || "254778074353",
    DESCRIPTION: process.env.DESCRIPTION || "*© ᴄʀᴇᴀᴛᴇᴅ ʙʏ GuruTech*",
    MODE: process.env.MODE || "private", // public, private, group, inbox

    // ──────────────── Status Features ────────────────
    AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
    AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
    AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
    AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY GURU MD 🤍*",

    // ──────────────── Anti & Protection ────────────────
    ANTI_LINK: process.env.ANTI_LINK || "false",
    ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
    DELETE_LINKS: process.env.DELETE_LINKS || "false",
    ANTI_BAD: process.env.ANTI_BAD || "false",
    ANTI_VV: process.env.ANTI_VV || "false", // Anti view once
    ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", // 'same' to resend in chat

    // ──────────────── Auto Features ────────────────
    AUTO_REACT: process.env.AUTO_REACT || "false",
    CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
    CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
    AUTO_VOICE: process.env.AUTO_VOICE || "false",
    AUTO_STICKER: process.env.AUTO_STICKER || "false",
    AUTO_REPLY: process.env.AUTO_REPLY || "false",
    AUTO_TYPING: process.env.AUTO_TYPING || "false",
    AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
    ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
    READ_MESSAGE: process.env.READ_MESSAGE || "false",
    READ_CMD: process.env.READ_CMD || "false",

    // ──────────────── Group Features ────────────────
    WELCOME: process.env.WELCOME || "false",
    ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",

    // ──────────────── Visuals & Media ────────────────
    MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/ntfw9h.jpg",
    ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/ntfw9h.jpg",
    LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *GURU MD* ⚡",

    // ──────────────── NEW & ADVANCED OPTIONS (2026) ────────────────
    AUTO_VIEW_STATUS: process.env.AUTO_VIEW_STATUS || "true",        // Auto mark status as seen
    AUTO_SAVE_STATUS: process.env.AUTO_SAVE_STATUS || "false",      // Auto-download statuses to folder
    STATUS_SAVE_PATH: process.env.STATUS_SAVE_PATH || "./statuses", // Where to save statuses
    ANTI_CALL: process.env.ANTI_CALL || "true",                     // Reject incoming calls
    AUTO_BLOCK_SPAM: process.env.AUTO_BLOCK_SPAM || "false",        // Block users spamming
    SPAM_THRESHOLD: process.env.SPAM_THRESHOLD || 5,                // Messages in 10s to consider spam
    PUBLIC_MODE: process.env.PUBLIC_MODE || "false",                 // Allow non-contacts to use bot
    ANTI_DELETE: process.env.ANTI_DELETE || "true",                 // Detect & log deleted messages
    AUTO_TYPING_ON_CMD: process.env.AUTO_TYPING_ON_CMD || "false",   // Show typing when processing cmds
    AUTO_READ_RECEIPTS: process.env.AUTO_READ_RECEIPTS || "true",   // Send blue ticks automatically

    // Add more here if you want (future-proof)
    // MAX_GROUP_LIMIT: process.env.MAX_GROUP_LIMIT || 20,
    // AUTO_BACKUP: process.env.AUTO_BACKUP || "false",
};
