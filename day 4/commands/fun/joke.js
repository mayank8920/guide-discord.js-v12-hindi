const discord = require("discord.js");
const axios = require("axios");

module.exports = {
  name: "joke",
  category: "fun",
  usage: "joke",
  run: async (client, message, args) => {
    const getJoke = async() => {
      const response = await axios.get('http://www.official-joke-api.appspot.com/random_joke');
      const joke = response.data;
      return joke;
    };
    const jokeValue = await getJoke();
    const embed = new discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`this is a joke for you ${message.member.displayName} \n\n ** \n ${jokeValue.setup} ** \n\n Answer : \n **${jokeValue.punchline} \n **`)
    return message.channel.send(embed)
  }
}
