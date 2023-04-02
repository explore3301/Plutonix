const { MessageEmbed } = require(`discord.js`);


module.exports = {
  name: "ping",
  aliases: [],
  description: `sends bot's ping`,
  category: "Fun",
  type: "CHAT_INPUT",
  cooldown: 5,
  


  

  run: async (client, interaction, args) => {
    // Code

      interaction.reply({
        embeds: [
          new MessageEmbed()
            .setColor(client.neutral)
            .setDescription(`Ping :: \`${client.ws.ping}\``)
        ], ephemeral : true
      })

  }

}