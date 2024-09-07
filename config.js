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

  sessionName:process.env.SESSION_ID || "SUHAIL_12_15_09_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMxLFxuICAgICAgICA0NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDg3LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM0LFxuICAgICAgICAyMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxODYsXG4gICAgICAgIDY4LFxuICAgICAgICAxNDYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE0NixcbiAgICAgICAgNzksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDksXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDUyLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjcsXG4gICAgICAgIDUyLFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICAzOCxcbiAgICAgICAgNjksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjIsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MixcbiAgICAgICAgMTEzLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjA2LFxuICAgICAgICAzOCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA1MCxcbiAgICAgICAgNjQsXG4gICAgICAgIDg4LFxuICAgICAgICA4NixcbiAgICAgICAgNDksXG4gICAgICAgIDM2LFxuICAgICAgICA5NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYwLFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDUsXG4gICAgICAgIDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDkwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNDYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMDQsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMCxcbiAgICAgICAgMTExLFxuICAgICAgICAyNDksXG4gICAgICAgIDg5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxODksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgODksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjAzLFxuICAgICAgICAxODEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODYsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg3LFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVhYTBjdFN6OU05dU84RmpKSEZ4R2hXalFWYkQxd0JRMGhzQmxBZXRWUGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlgxdWx3NC1hUTlpOVNZRko3TmNHMFFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZWIzMGUwMGEtNzgzMS00YzM2LWE3YTYtMDA2NzM0OTdhZTkyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NixcbiAgICAgIDM1LFxuICAgICAgNyxcbiAgICAgIDE1NSxcbiAgICAgIDEyOSxcbiAgICAgIDMwLFxuICAgICAgMTY2LFxuICAgICAgNTksXG4gICAgICA2NixcbiAgICAgIDM4LFxuICAgICAgMTk0LFxuICAgICAgMTE4LFxuICAgICAgMTA5LFxuICAgICAgNjksXG4gICAgICAyMjAsXG4gICAgICA3NixcbiAgICAgIDc3LFxuICAgICAgMjI0LFxuICAgICAgODIsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgMTIwLFxuICAgICAgNjMsXG4gICAgICAxNDUsXG4gICAgICAxNDUsXG4gICAgICAxMjcsXG4gICAgICA5NyxcbiAgICAgIDEwOCxcbiAgICAgIDIzMyxcbiAgICAgIDQyLFxuICAgICAgMTk2LFxuICAgICAgNjMsXG4gICAgICAzMixcbiAgICAgIDc0LFxuICAgICAgODUsXG4gICAgICAxNzQsXG4gICAgICAxNjEsXG4gICAgICAxNDksXG4gICAgICAyLFxuICAgICAgMjAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjcxQUtTUERXXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTEyMDA3NjA0OjIzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzYxODk1MDM4NjkxNjc6MjNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUC9GNDUwR0VMbUg4YllHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJvVFV1ODJ5M0lEc2pzc0tWcHVyY1AxMTQzeG0xWFYyR1oxQm1IZ2V5dXhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkdBS3hWUmpOK0tOMDZGWVhDZ3YyOTczYVRmVDdXS2IzdFdaM3puaVFXSzZiTzBwVTZ5Q2I0aytxelY1YUlBb0hFTzRKWExvSU1WaDV1eHhpVFY0cUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImdybXhwMWZCUGdIZzVydzBPODhOajJLWmsybi84djJhenhjcktTeHUrV0tJeUpZNUk5Z1BwY0xxWmVmU2JMb0Z3aXVuUmlUSEtOb0R3d2J4OTdDcGp3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMTIwMDc2MDQ6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjU3MTEyOTMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPU0FcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9TQS5qc29uIjogIntcImtleURhdGFcIjpcIlNjNDE1bnZUTHNmVjM0MUFqUWlSTUdTTEQ0cWhWMlJBOGJtVVg1QjV0cWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTY3MzA2MTExNyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNTcxMTAxMzk0MlwifSIKfQ==",  // PUT SESSION ID HERE 
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
 
