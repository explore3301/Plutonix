const { ai } = require('../../../handlers/database.js')
const { MessageEmbed } = require(`discord.js`)
const { o, x, s, arrow, point } = require("../../../settings/emojis.json")

module.exports = {
  name: "delete",
  aliases: ["d"],
  description: `Deletes previously set-up channel `,
  userPermissions: ["ADMINISTRATOR"],
  botPermissions: ["ADMINISTRATOR"],
  category: "Setup",
  cooldown: 60,



  run: async (client, message, args, prefix) => {
    // Code

    let ch = message.guild.channels.cache.get(await ai.get(`chatbot_${message.guild.id}`)) || null


    if (!ch) return message.reply({
      embeds: [
        new MessageEmbed()
          .setColor(client.main)
          .setDescription("NuT-Ai Chatbot Channel Not Found")
        .setFooter("Powered By NuT-Ai", client.user.displayAvatarURL())
      ]
    })

    await ch.delete()
    await ai.delete(`chatbot_${message.guild.id}`)
    let emb = new MessageEmbed()
      .setColor(client.main)
      .setDescription(o + s + "NuT-Ai Chatbot Channel Deleted Successfully")
    // .setFooter(client.footer)
    .setFooter("Powered By NuT-Ai", client.user.displayAvatarURL())
    return message.reply({ embeds: [emb] })


  }
}
