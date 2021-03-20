const {prefix} = require("./config.json")
const { config } = require("dotenv");
const discord = require("discord.js");
const fs = require("fs");
const client = new discord.Client({disableMentions: "everyone"});
client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


client.on("ready", () => {
    console.log(`Hi, ${client.user.username} is now online!`);

    client.user.setPresence("I am developed by mayank") 
})
  



client.on("message", async message => {
  
  if (!message.guild) return;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;
  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));
  
    if (command) command.run(client, message, args)
});
client.login(process.env.token)
