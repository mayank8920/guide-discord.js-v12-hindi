const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "avatar",
  aliases: ["av"],
  category: "utility",
  usage: "avatar/av @user",
  description: "Gives avatar for message author or mentioned user.",
  run: async (client, message, args) => {
    let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: "gif",format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, ize: 2048 });
    if(message.mentions.users.size > 0) {
        const embed = new Discord.MessageEmbed()
        .setColor(0xFFFF00)
        .setTitle(`${message.mentions.users.first().username}:`)
        .setImage(`${avatar}`);
        message.channel.send({ embed });
    } else {
        const embed = new Discord.MessageEmbed()
        .setColor(0xFFFF00)
        .setTitle(`${message.author.username}:`)
        .setImage(`${avatar + "?size=2048"}`);
        message.channel.send({ embed });
    }
}
}
