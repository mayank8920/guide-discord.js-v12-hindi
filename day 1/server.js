const Discord = require("discord.js");
const client = new Discord.Client();

client.once("ready", () => {
  console.log("I am online");
  client.user.setActivity(`I am developed by mayank`);
});
client.on("message", message => {
  if(message.content === "ping") {
    return message.channel.send(`pong ${client.ws.ping}`)
  }
});

client.login("hey")
