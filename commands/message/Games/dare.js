const { MessageEmbed } = require(`discord.js`)
const tord = require('better-tord')

module.exports = {
  name: "dare",
  aliases: [],
  edesc:"dare",
  description: `sends random dare`,
  userPermissions: [],
  botPermissions: [],
  category: "Games",
  cooldown: 5,

  run: async (client, message, args, prefix) => {
    
    const challenge = tord.get_dare()

    let emb = new MessageEmbed()
      .setColor(client.main)
      .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
      .setDescription(challenge)
    message.reply({ embeds: [emb] })
  }
}
