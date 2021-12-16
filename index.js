var Discord = require("discord.js");
var Client = new Discord.Client({intents: []});

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.login("OTIxMDUxNzkxNDYwNzk4NDY1.YbtSUw.VejUDGBZ0nlqbBAkNgliU4PZFSk");