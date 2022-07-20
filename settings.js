//═══════════════════════════════════════════════════════//

//

//                              𝙶𝙾𝙹𝙾-𝚂𝙰𝚃𝙾𝚁𝚄 𝓫𝔂 𝓷𝓮𝔁𝓾𝓼𝓝𝔀

//𝙰𝙳𝙾𝙿𝚃𝙴𝙳 𝙵𝚁𝙾𝙼  𝚂𝙲𝚁𝙸𝙿𝚃 𝙾𝙵 𝙲𝙷𝙴𝙴𝙼𝚂𝙱𝙾𝚃 𝚅2 𝙱𝚈 𝙳𝙶𝚇𝚎𝚘𝚗 

//

//════════════════════════════//



const fs = require('fs')

const chalk = require('chalk')



//Api Website\\

global.APIs = {

	zenz: 'https://zenzapis.xyz',
}



//Api Key\\

global.APIKeys = {

	'https://zenzapis.xyz': '0b0df72a76', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\

}



//customize settings\\

global.owner = ['charuka sandeepa']

global.premium = ['💗Queen Ashiya🧚']

global.ownernomer = '94786178335'

global.ownername = 'Charuka sandeepa'

global.botname = '💗Queen Ashiya'

global.footer = '©💗Queen Ashiya🧚.'

global.ig = 'https://github.com/BlackPant'

global.region = 'Sri Lanka, Pallebadda'

global.sc = 'https://github.com/BlackPanther-svg/Queen-Ashiya'

global.myweb = 'https://youtube.com/channel/UChP2lplECA2eZGCYLy_QeRA'

global.packname = '💗♕۝⃟̥̩̩̩̥̩♥️𝒞𝐻𝒜𝓡𝓾۝⃟̥̩̩̩̥̩̥♥️♕'

global.author = '💗charuka'

global.sessionName = 'session'

global.prefa = ['','!','.','❄','🖤','☃']

global.sp = '◈'

global.mess = {

    success: 'හරි බන්✓',

    admin: 'උබට පුලුවන් පකක් නැහ් ඇඩ්මින් ගනිම් පොන්නයෙක් වෙන්නැතුව!✾ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٖٖٜ۬ـٰٖٜ۬ـٰٖٜ۬ـٰٰٖٖٜ۬ـٰٰٰٖٖٖٜ۬ـٰٰٰٰٖٖٖٖٜ۬✾➣',

    botAdmin: 'ගෲප් එකෙ ඇඩ්මින් අරන් ඉෆ්හපන් ඒසො🙁😌',

    owner: 'හුකපන් පකයා ඒක මගේ කමාන්ඩ්😯⃟💦᭄᭄̊̊̊̊࿔!',

    group: 'Feature Used Only For Groups!😒⃝⃟ꦾ👌ꦿ',

    private: 'Features Used Only For Private Chat😯⃟💦᭄᭄̊̊̊̊࿔!',

    bot: 'This Feature Is Only For Bot❤️⃝➤⃟̱̱̱̱̄̄̄̄😢',

    wait: 'පොඩ්ඩක් ඉදපම් පකො හදිස්සි නොවූ😜🔫',

    error: 'Error! Maybe Api Key Is Expired🤔!',

    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',

}

    global.limitawal = {

    premium: "Infinity",

    free: 12,

    monayawal: 1000

}

   global.rpg = {

   darahawal: 100,

   besiawal: 15,

   goldawal: 10,

   emeraldawal: 5,

   umpanawal: 5,

   potionawal: 1

}

global.thumb = fs.readFileSync('./GojoMedia/HD-wallpaper-little-queen-red-pretty-dress-queen-beautiful-magic-sweet-throne-anime-beauty-anime-girl-long-hair-blue-art-lovely-blonde-hair-swet-cute-girl-purple-crown.jpg')

global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update'${__filename}'`))

	delete require.cache[file]

	require(file)

})
