const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
let channel =     client.channels.get("710614934647734302")
setInterval(function() {
channel.send(`اخيرا ياولاد الوسخ اتعلمت هيروكو اخيرا يامعرصين  اغنيه مني ليكو احا الشبشب ضاع`);
}, 30)
})

client.login(process.env.BOT_TOKEN);