const Discord = require('discord.js');
const client = new Discord.Client();



client.on("ready", () => {
let channel =     client.channels.get("721402151745880197")
setInterval(function() {
channel.send(`هاي شباب بدك مني شيء كلمني خاص مفتوح لك`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
