const { ai } = require('../../../handlers/database.js')
const { MessageEmbed } = require(`discord.js`)
const { o, x, s, arrow, point } = require("../../../settings/emojis.json")

module.exports = {
  name: "setup-ai",
  aliases: ["sai"],
  description: `Sets-up AI chatbot channel`,
  userPermissions: ["ADMINISTRATOR"],
  botPermissions: ["ADMINISTRATOR"],
  category: "Ai",
  cooldown: 60,



  run: async (client, message, args, prefix) => {
    // Code
    if (!message.member.permissions.has("ADMINISTRATOR")){
      return message.reply(`You must have \`ADMINISTRATOR\` permissions to run this command. `)
    }
      
    let chnl = message.mentions.channels.first() || null
    let channel = await ai.get(`chatbot_${message.guild.id}`) || null
    let oldChannel = message.guild.channels.cache.get(channel) || null

    if (oldChannel) {
      let emb = new MessageEmbed()
        .setColor(client.main)
        .setDescription("NuT-Ai Chatbot Channel Is Already Created")
      //  .setFooter(client.footer)
      .setFooter("Powered By NuT-Ai", client.user.displayAvatarURL())

      return message.reply({ embeds: [emb] })
    }

    if (!chnl) {

      message.guild.channels
        .create(`nut﹒chatbot`,
          {
            type: "GUILD_TEXT",
            rateLimitPerUser: 5,
            reason: `Nut-AI chatbot Channel`,
            topic: `Nut-AI chatbot Channel`,
          })
        .then(async (ch) => {

          await ai.set(`chatbot_${message.guild.id}`, ch.id)

          let emb = new MessageEmbed()
            .setColor(client.main)
     .setDescription("NuT-AI Chatbot Channel Created")
            //.setFooter(client.footer)
          .setFooter("Powered By NuT-Ai", client.user.displayAvatarURL())
          return message.reply({ embeds: [emb] })

        })
    }

    if (chnl) {
      await ai.set(`chatbot_${message.guild.id}`, chnl.id)

      let emb = new MessageEmbed()
        .setColor(client.main)
         .setDescription("NuT-AI Chatbot Channel Created")
       // .setFooter(client.footer)
      .setFooter("Powered By NuT-Ai", client.user.displayAvatarURL())
      return message.reply({ embeds: [emb] })
    }


  }
}
