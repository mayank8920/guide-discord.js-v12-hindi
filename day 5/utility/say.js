const discord = require("discord.js");

module.exports = {
  name: "say",
  description: 'say your given text',
  category: "utility",
  usage: "!say <text>",
  run: async (client,message,args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES"))
      return message.channel.send(`:x: | You Require **MANAGE MESSAGE** Permission to use this command`)
    
    let saying = args.join(" ");
    if(!saying) return message.reply(`Please, give me a text`)
    message.delete();
    message.channel.send(`${saying}`)
  }
}
