const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
SESSION_ID: process.env.SESSION_ID || "NOVA~;;;H4sIAAAAAAAAA5VU25KqOBT9l7xqHQG5KFVdNagoF8EL2F6m5iFCxHDvJCB4yn+fwj59+jzMnOnhKewke6299tr5DvICU2SjFqjfQUlwDRnqlqwtEVDBpLpcEAF9EEIGgQoc26Pl23G9Nl99zxV2k4FknMTw5pmvyYwIJKZ3/jbaHnfZ6AU8+qCszikOfpPwIJcnWIbV5k71vWldpZns+XIjNJM0sBSf9HiLIymnr+b0BTy6jBATnEd6eUUZIjC1UbuGmHyN/tG0V8lui/J6PG2raqz70n0bLkJ3aYSD2LfmeqFdWLMxsuRr9LVDPaLruInt1rCkBUMNd6wHLFm65ayJxqSZReS22U7D5PZOn+IoR6EZopxh1n5Z957NFoW43ydD4x678NS6x1O2DAlfeU5WjZf6qLej55l02G2+RrzOk7elwzWGz+YBWs3iScR5x1irk8Elv2qxKI9H9uLMgl30K/E1+fBK8n90vy3vWxlPffhalPdAWLbWaSbydMgGTkXD3dzE1KgPjifmX6Rv2pJSoC2SCdvL+asoZRjdoqrwDdy8ifoqX+rtsDglYbT5pA9ZRX7H8jAR7DJyo+jG3+b6+YyC8DY7jA/o9TRw62BaE8s+vy3WdsRPeKXHLOL33hZZ4DtNVVl3YW6Hs8wY+JGmHe0yDzTrVcHay7OiBLVmCFT+0QcERZgyAhku8i4m9wEMaw8FBLGnuOAo6z6/SlxNT+PV2t0PiXNM840eW+7E14Rmxh0s3fQ2LNu9gD4oSREgSlFoYMoK0jqIUhghCtQ//+qDHDXsvW0d2JDvgwsmlO3yqkwLGH709GMTBkFR5cxr82DaLRABKvcZRozhPKKdilUOSXDFNZpeIaNAvcCUop/1IYLCH7Gft7tbIWIQpxSoYLrK9QQeDd3uZZwjLhZaEmnTSAOfaB9Ne5flXMnC3F6NT9Fc4VP7PIDbVeCLUyetNbQs9iVO+FUvH5GN+fIPSYAKNhI08NWOQ3yZ45nkRKujfF43ZGIjjp+2gc/L6cIJk5ozLLFynXatU7dIMS/ybXlX9pJRF/pQisrbOYahzO1cJk02Lx1aiGocoF/B/M3S3F/zzfE0j5Trnp0EIYP7ud+7z7JkYPFOMyilRj7HaWmJgahH++H1QMX70LdGhciiZn0+4D0el96oOAmY7laIjzbvdsqePsYhUIHEDRVeGguKoKhD8Q/67da1A5bltxwx0Afp85QsCjI/HImSonCj58Eu/jEY6Y8HCT9N0yXufi8YPec7hx3cfwK9K9D5iHv0f0nx48H4l6Gb7JWKXb243h8naHzysoGQ+Lne02LrfDOwPH87lq5flwObm4LH468+KFPILgXJgApgHpICh6APSFF1xjTzS/EbsOnENLUocrvCU0iZ9ml2H2eIMpiVQOUVRZI4WRgq76fWpCgNSK9ABcMs5WMP9EHWamXpMcg+Zgdo3bfAGnj8DaUkEURVBwAA",
// add your Session Id 

AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen

AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 

AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true or false for auto react on status

ANTI_CALL: process.env.ANTI_CALL || "true",
// anticall on/off

AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*VI TU ESTADO 🔥*",
// set the auto reply massage on status reply  

ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     

ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat     

WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    

ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
// make true to know who dismiss or promoted a member in group

ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 

MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 

MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/SNDvWDPb/shimba-XD.jpg",
// add custom menu and mention reply image url

PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   

BOT_NAME: process.env.BOT_NAME || "NOVA-XMD",
// add bot namw here for menu

STICKER_NAME: process.env.STICKER_NAME || "SHIMBA-XD",
// type sticker pack name 

CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    

CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself

OWNER_NUMBER: process.env.OWNER_NUMBER || "255767862457",
// add your bot owner number

OWNER_NAME: process.env.OWNER_NAME || "𝙱.𝙼.𝙱-𝚃𝙴𝙲𝙷",
// add bot owner name

DESCRIPTION: process.env.DESCRIPTION || "*© powered SHIMBA-𝚇𝙳*",
// add bot description    

ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Hfm7K7QF/IMG-20260302-WA0004.jpg",
// add img for alive msg

LIVE_MSG: process.env.LIVE_MSG || "> Powered by Nova Xmd",
// add alive msg here 

READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs

AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs

ANTI_BAD: process.env.ANTI_BAD || "true",
// false or true for anti bad words  

MODE: process.env.MODE || "public",
// make bot public-private-inbox

AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 

AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 

ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 

PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod

AUTO_TYPING: process.env.AUTO_TYPING || "true",
// true for automatic show typing   

READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 

DEV: process.env.DEV || "255767862457",
// replace with your whatsapp number        

ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 

AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 

AUTO_BIO: process.env.AUTO_BIO || "false",
// make true if you want bot to auto-update bio/status

CHAT_BOT: process.env.CHAT_BOT || "false"
// make true if you want AI chatbot responses enabled
};
