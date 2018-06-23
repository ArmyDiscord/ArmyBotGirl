const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ArmyBot, !help");
    console.log("Bot Prêt !");
});

bot.login ("process.env.TOKEN")
