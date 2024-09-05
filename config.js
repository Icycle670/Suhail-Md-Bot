const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349112007604";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_15_02_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICA3MyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OSxcbiAgICAgICAgNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAxNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NCxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE4LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4OSxcbiAgICAgICAgMjE3LFxuICAgICAgICAzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTM4LFxuICAgICAgICA0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNzksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDExLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxMixcbiAgICAgICAgMTk4LFxuICAgICAgICA1MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMixcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTU4LFxuICAgICAgICA3MixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDExLFxuICAgICAgICAyMDcsXG4gICAgICAgIDU2LFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjUsXG4gICAgICAgIDgsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMjAsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDExLFxuICAgICAgICAyMjMsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICA0OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAzOCxcbiAgICAgICAgMTYwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTYsXG4gICAgICAgIDExLFxuICAgICAgICAxNzQsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI2LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNTAsXG4gICAgICAgIDEwMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDM2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMSxcbiAgICAgICAgMjExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxNixcbiAgICAgICAgNTEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNzRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM3LFxuICAgICAgICA0NCxcbiAgICAgICAgMjksXG4gICAgICAgIDQzLFxuICAgICAgICA4NyxcbiAgICAgICAgNjIsXG4gICAgICAgIDczLFxuICAgICAgICA4NSxcbiAgICAgICAgMjQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI5LFxuICAgICAgICA4NixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMzksXG4gICAgICAgIDY4LFxuICAgICAgICAxODIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNjMsXG4gICAgICAgIDY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDU1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjAxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0MCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1SUR6aFdTVDBDN21XY3Vublp0c0xNbXEzZjhHMlJtQ1ZjQ1NjK0RSMjI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJFd3l6cTJnOFFfaUE4YlNZTmN1X3pRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjEzODQwNDQ1LTc1MjgtNDk1MC1iMmVhLTY2NTZiNWNhOGE0NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDksXG4gICAgICAyMSxcbiAgICAgIDEzOSxcbiAgICAgIDEzNSxcbiAgICAgIDQwLFxuICAgICAgMzgsXG4gICAgICAxMjMsXG4gICAgICA3OCxcbiAgICAgIDExNixcbiAgICAgIDIsXG4gICAgICAyMzMsXG4gICAgICA4MixcbiAgICAgIDE4NSxcbiAgICAgIDQzLFxuICAgICAgMjAxLFxuICAgICAgMjIsXG4gICAgICA4MCxcbiAgICAgIDg4LFxuICAgICAgMTg2LFxuICAgICAgMjA1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDcyLFxuICAgICAgMjE4LFxuICAgICAgNjAsXG4gICAgICAzNyxcbiAgICAgIDksXG4gICAgICAyNDQsXG4gICAgICAyMjAsXG4gICAgICAxMjUsXG4gICAgICAyMzcsXG4gICAgICA4OSxcbiAgICAgIDI1NCxcbiAgICAgIDgxLFxuICAgICAgMjAyLFxuICAgICAgMTUwLFxuICAgICAgMTAyLFxuICAgICAgMyxcbiAgICAgIDY1LFxuICAgICAgMTI5LFxuICAgICAgNDksXG4gICAgICAyMzFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFBZODdQNUpcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMTIwMDc2MDQ6MjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEzNjE4OTUwMzg2OTE2NzoyMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQM0Y0NTBHRVBLUDU3WUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm9UVXU4MnkzSURzanNzS1ZwdXJjUDExNDN4bTFYVjJHWjFCbUhnZXl1eFU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiL2hGb2tOS3lLOGtCQmcyMXZIVHk3QXB4QWlLZXg0ZUxZSVdaaGxIUW8xeXpZZ3JESUxYZGFDeURROU5sVE9wTVpGbmw0M2dwbGhQbW1NamRYbXRkQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiaXFOVitOd3REQytRZkEyTFhmVDBxazRpRTRHTXVjZ2ZaUDZRcjI5bDU3cTV5L0p4QkhrMytqTXdobzVkV3F1ZSt1L1lKdFRrQWRtMFR4a2l3QjJoZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTExMjAwNzYwNDoyMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTU0ODUzNFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0=",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
