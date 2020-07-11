const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
let channel =     client.channels.get("730552471935647747")
setInterval(function() {
channel.send(`هاي شباب بدك مني شيء كلمني خاص مفتوح لك`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
