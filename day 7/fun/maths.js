const { MessageEmbed } = require("discord.js");
const math = require("mathjs");

module.exports = {
  name: "evalute",
  category: "fun",
  description: "this command will solve maths equations",
  usage: "evalute <EQUATION>",
  run: async (client,message,args) => {
      if (!args[0]) return message.channel.send("Please Give Me Equation To Solve")
    
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setTitle(`Answer`)
    .setDescription(math.evaluate(args.join(" ")))
    .setTimestamp()
    message.channel.send(embed)
  }
}
