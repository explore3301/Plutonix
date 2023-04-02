const simplydjs = require("simply-djs")
const { configs } = require('../../../handlers/database.js')
const { MessageEmbed } = require(`discord.js`)
const { space, point, check, cross, moderator } = require("../../../settings/emojis.json")



module.exports = {
  name: "levelsetup",
  aliases: ["lsetup"],
  edesc: "lsetup",
  description: `create embed for making tickets`,
  userPermissions: ["MANAGE_CHANNELS"],
  botPermissions: [],
  category: "Levels",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code

    color = client.main

    let chnl = message.mentions.channels.first() || null
    let channel = await configs.get(`level_${message.guild.id}`) || null
    let oldChannel = message.guild.channels.cache.get(channel) || null

    if (oldChannel) {
      reason = ` Level system already set-Up in ${oldChannel}`
      let emb = new MessageEmbed()
        .setColor(client.wrong)
        .setDescription(`**Operation Unsuccessful ** \n${reason}`)
       // .setFooter(client.footer)
      return message.reply({ embeds: [emb] })
    }

    if (!chnl) {

      message.guild.channels
        .create(`nut﹒leveling`,
          {
            type: "GUILD_TEXT",
            rateLimitPerUser: 3,
            reason: `Leaderboard Channel `,
            topic: `Leaderboard Channel `,
          })
        .then(async (ch) => {

          await configs.set(`level_${message.guild.id}`, ch.id)

          let emb = new MessageEmbed()
            .setTitle("LEVEL SYSTEM")
            .setColor(color)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setDescription(`**Moderator :** ` +
              `${message.author}\n\n**Sucessfully Created**\n${ch}`)
            //.setFooter(client.footer)
          return message.reply({ embeds: [emb] })

        })
    }

    if (chnl) {

      await configs.set(`level_${message.guild.id}`, chnl.id)

      let emb = new MessageEmbed()
        .setTitle("LEVEL SYSTEM")
        .setColor(color)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setDescription(`**Moderator :** ` +
          `${message.author}\n\n**Sucessfully Created**\n${chnl}`)
       // .setFooter(client.footer)
      return message.reply({ embeds: [emb] })
    }

  }
}
