const { MessageEmbed } = require(`discord.js`)
const tord = require('better-tord')

module.exports = {
  name: "truth",
  aliases: [],
  edesc:"truth",
  description: `sends random truth`,
  userPermissions: [],
  botPermissions: [],
  category: "Games",
  cooldown: 5,

  run: async (client, message, args, prefix) => {
    
    const challenge = tord.get_truth()

    let emb = new MessageEmbed()
      .setColor(client.main)
      .setAuthor({ name: `${message.author.tag}`, iconURL: message.author.displayAvatarURL({dynamic: true})})
      .setDescription(challenge)
    message.reply({ embeds: [emb] })
  }
}
