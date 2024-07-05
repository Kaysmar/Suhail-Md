const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349063631083";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_44_07_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMwLFxuICAgICAgICA3OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA1NCxcbiAgICAgICAgMjM0LFxuICAgICAgICA4NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4LFxuICAgICAgICAxMjksXG4gICAgICAgIDY1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjQwLFxuICAgICAgICA0MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzEsXG4gICAgICAgIDYwLFxuICAgICAgICA2MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjE1LFxuICAgICAgICA5MyxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU0LFxuICAgICAgICA5MixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgMTA3LFxuICAgICAgICAzNixcbiAgICAgICAgMTE3LFxuICAgICAgICAzNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk0LFxuICAgICAgICA0NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTc3LFxuICAgICAgICA0MixcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICA0OCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDYyLFxuICAgICAgICAyOCxcbiAgICAgICAgMTA5LFxuICAgICAgICA1NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI4LFxuICAgICAgICA0NCxcbiAgICAgICAgNDEsXG4gICAgICAgIDU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTUsXG4gICAgICAgIDE0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDYwLFxuICAgICAgICAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxOTIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDc1LFxuICAgICAgICAyMjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDAsXG4gICAgICAgIDUwLFxuICAgICAgICAxODgsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1MixcbiAgICAgICAgNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODksXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTg5LFxuICAgICAgICA3NCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzMSxcbiAgICAgICAgNixcbiAgICAgICAgMTE1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNixcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAzMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ1LFxuICAgICAgICAzNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDgxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDY5LFxuICAgICAgICAyOSxcbiAgICAgICAgNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMixcbiAgICAgICAgODAsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0MSxcbiAgICAgICAgMTksXG4gICAgICAgIDgyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQzLFxuICAgICAgICA4MixcbiAgICAgICAgODksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI0NyxcbiAgICAgICAgODYsXG4gICAgICAgIDQ4LFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICA3MSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgODcsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTk0LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibTFSd3h2MmV5b1pWTW5ubktPTmUzeUdzdFZOcHdhdlAwQXhLeFZONnFxbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ5MDYzNjMxMDgzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI3NTk3QkE4NTcyRDU3MUJDNTc0MEQxMjA0NUNGNkIwN1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjAxODM0ODRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaGkzd042NzlSNDJCWWE4Y3E3ZXdvZ1wiLFxuICBcInBob25lSWRcIjogXCI0OTc1YmY3Yi1kMTE2LTQ5NGUtYWE2OS0wOGUwNDg5ZTI0YWRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI1LFxuICAgICAgMTY2LFxuICAgICAgMTAzLFxuICAgICAgMjA0LFxuICAgICAgMTQ3LFxuICAgICAgNTYsXG4gICAgICAxNjYsXG4gICAgICAxNTUsXG4gICAgICAyMzAsXG4gICAgICAxNjQsXG4gICAgICA5OCxcbiAgICAgIDg1LFxuICAgICAgMTQxLFxuICAgICAgMjQyLFxuICAgICAgMTMyLFxuICAgICAgMTM5LFxuICAgICAgMixcbiAgICAgIDE0OSxcbiAgICAgIDEyMSxcbiAgICAgIDE0M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjUsXG4gICAgICA1MixcbiAgICAgIDIxOSxcbiAgICAgIDQzLFxuICAgICAgOCxcbiAgICAgIDEyNixcbiAgICAgIDcsXG4gICAgICAxMTgsXG4gICAgICAxMDksXG4gICAgICA3OSxcbiAgICAgIDExNSxcbiAgICAgIDE5NyxcbiAgICAgIDE2OCxcbiAgICAgIDk5LFxuICAgICAgNSxcbiAgICAgIDU3LFxuICAgICAgNixcbiAgICAgIDExOSxcbiAgICAgIDE0OSxcbiAgICAgIDE5NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJERDFHTTI4Q1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2MzYzMTA4MzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjc0MzExMzczOTM4NzIzOjEzQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0wyQXdqOFFzdFdmdEFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiQnh6aFJPV1J0V2FpUWZYK1k2blVqNnBjWi9wZzR5YytFWnlLbUxkZHFSZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJBWUd5QU1yL1pYa1Y5Y2hlV3JsS3NjM0x5N1QrNktubVFOOFhlRW0vZWhWdDZ2cmtXUTFhRm9lMGhsV2c1Z0ZTOVdhdklMTjUrWEJqdDR1M0VOeDFEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJCK284bXZNYWo1TFQ0WlNVY2YyQXNEMnl4OWJrNEdNNjNyNGtCcEtNTzk4YWRmYkFZREhxZTRxc3FYRWZHMkQ2RjRtTENLWTN6M3ZEQ3hFZ0V2UnpCUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDYzNjMxMDgzOjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjAxODM0NzcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQT2JcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBPYi5qc29uIjogIntcImtleURhdGFcIjpcIkVsVTV6NC9PWGpxU0J4Y0x6ZkMybjl6cUl4bXJlNS8xTEZjYWNpMEV1bmc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTMzMjAxOTgwLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTcwOTY3MjI2NDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
