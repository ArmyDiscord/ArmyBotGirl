const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame("ArmyBot, !help");
    console.log("Bot Prêt !");
});

bot.login ("NDU5NDI5MTEyMzk4NzQxNTE0.Dg-7tg.zyp6WXwYSS3Rm3p2UmdHlPgBdyg")