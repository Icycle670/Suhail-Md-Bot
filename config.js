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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168013151";




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

  sessionName:process.env.SESSION_ID || "SUHAIL_13_31_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICA2OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgODUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjksXG4gICAgICAgIDU3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA1LFxuICAgICAgICAzNSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5LFxuICAgICAgICAzNixcbiAgICAgICAgMTUwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM1LFxuICAgICAgICA4MixcbiAgICAgICAgODEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcxLFxuICAgICAgICA5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NyxcbiAgICAgICAgMyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDgsXG4gICAgICAgIDg0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICA5LFxuICAgICAgICA4NixcbiAgICAgICAgNjksXG4gICAgICAgIDYxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxODksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgOSxcbiAgICAgICAgMTkwLFxuICAgICAgICA3MixcbiAgICAgICAgMTgsXG4gICAgICAgIDM2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICA1NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyOSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTM0LFxuICAgICAgICA2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTY3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMyxcbiAgICAgICAgNzksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMzLFxuICAgICAgICA5MixcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMSxcbiAgICAgICAgMTYzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjUwLFxuICAgICAgICA5OSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDk0LFxuICAgICAgICA2NixcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTksXG4gICAgICAgIDM4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgOTcsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIsXG4gICAgICAgIDU5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDExLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDk4LFxuICAgICAgICAxMixcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyMSxcbiAgICAgICAgOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDksXG4gICAgICAgIDE0MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIzMixcbiAgICAgICAgNzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNjksXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjMwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkpnaXpGZEo1dEFuZDdwMWlpOGN5MDRMeDhsUFBNZ052ZzBiVlNmeXhSL1U9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODE2ODAxMzE1MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjdCQkU2MUMyRDM2N0IyNzZGODlFRDQ4QTRCNDJCOUNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI1NzE1ODU2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjhmWDdoWjNLVEotRlQ3QXgxSWZXSXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjUyOGUxNmQtOGYzZS00MjIzLTk5MzMtYTlkMTk3NWZkYWY5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1NCxcbiAgICAgIDE1NixcbiAgICAgIDIzMSxcbiAgICAgIDIwMixcbiAgICAgIDE2MSxcbiAgICAgIDE2NCxcbiAgICAgIDI0OSxcbiAgICAgIDIwNSxcbiAgICAgIDEwMixcbiAgICAgIDE1MCxcbiAgICAgIDEyLFxuICAgICAgNzUsXG4gICAgICA5LFxuICAgICAgMjUsXG4gICAgICA1MyxcbiAgICAgIDM1LFxuICAgICAgNzIsXG4gICAgICA4OCxcbiAgICAgIDEwNSxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MixcbiAgICAgIDE2OSxcbiAgICAgIDYyLFxuICAgICAgODcsXG4gICAgICAyMjIsXG4gICAgICA3MixcbiAgICAgIDk5LFxuICAgICAgNTIsXG4gICAgICAxMTksXG4gICAgICA2MSxcbiAgICAgIDE0MixcbiAgICAgIDExMixcbiAgICAgIDExMSxcbiAgICAgIDIyNCxcbiAgICAgIDE3NixcbiAgICAgIDEyNCxcbiAgICAgIDYxLFxuICAgICAgMzAsXG4gICAgICAyMSxcbiAgICAgIDY4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkQxMkJEOVpEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY4MDEzMTUxOjExQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiRHJpbGt5XCIsXG4gICAgXCJsaWRcIjogXCIxOTQxNDU3OTI2MDIzMTU6MTFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTksvNTJvUWg2dnh0Z1lZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJQc3RteFVzS1R6NGpNd3kyNUxkU1N6OUoxaTNzOTZiQndOU1FRdkc2RENnPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInhIR096N1R6UVlYc2ZZVGtaZXZMSjh1RmJuL2t0TFJrRTRFWXJQZXdTT1p1RTd2K3R3N1RrMW14QmNiNm9iY0ZIcTlQSlkrejVlekFZWXg2OTdoNEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImxObU5UNVlvM2xMRWwrTlAxa25ySTJza284WTJGbmxIUUpIdExwZm1xb01xaVRDYkFrUzdkSTlFMFluUGFQT3BSUENUSFgrQk1SZGVTWDRFUEQ1TmlnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjgwMTMxNTE6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTcxNTg1MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUNBNVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQ0E1Lmpzb24iOiAie1wia2V5RGF0YVwiOlwiVUJ1UWptWVBVaCtDd0VpSUlsSHZDeVBtb2lMWHg5dUJrUkVvc3djWnZTQT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMjM5OTM4MTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTcxNTg1NjI1MVwifSIKfQ===",  // PUT SESSION ID HERE 
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
 
