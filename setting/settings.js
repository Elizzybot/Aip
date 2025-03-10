const fs = require('fs')

global.owner = "-"
global.footer = "-"

global.own = "PAIN"
global.versi = "17.𝟬.𝟬"
global.bot = "PAIN 𝗜𝗻𝘃𝗮𝘀𝗶𝗼𝗻"

global.domain = "https://ramahostingservices.ramadhanhosting.my.id"
global.apikey = "ptla_H3ePW2PBwUn795pgB6vihuIlkFobH3aKIBU5U4YE7SA"
global.capikey = "ptlc_kuq28JGNCGlnc5LDsKbS600e9wC6NBfYO7o7cHQCepM"

//======== egg & loc biasanya sama jadi gausah ========//
global.egg = "15"
global.loc = "1"


global.mess = {
    success: 'Sudah kak 🕊️',
    OnlyGrup: `\`[ ! ]\` _Fitur ini hanya bisa di gunakan dalam grup _`,
    private: `_\`(❗)\`_ _*Perintah Ini Hanya Bisa Digunakan Di Private Chat !*_`,
    wait: '_*Tunggu Sebentar kak*_',
 // notregist: '_*Kamu Belum Terdaftar Di Database Bot Silahkan Daftar Terlebih Dahulu_*',
    endLimit: '_*Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB_*.',
     bugrespon: `*Process bugs......*`,
     owner: `*Command for bot owner only*`,
    premium: `*Command for premium user only*`,
     donebug: `\`[ ! ]\` Success,, Target is now down`,
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
