const { MessageEmbed } = require(`discord.js`);
const { configs, levels } = require('../../../handlers/database.js')
const { space, cross, point } = require("../../../settings/emojis.json")


module.exports = {
  name: "level",
  aliases: ["lvl", "rank"],
  edesc: "level @user(optional)",
  description: `check level of an user`,
  userPermissions: [],
  botPermissions: [],
  category: "Levels",
  cooldown: 5,

  run: async (client, message, args, prefix) => {

   color = client.main

    //code




    let status = await configs.get(`level_${message.guild.id}`) || null

    if (status == null || status == 0) {

      reason = `Level system is not Set-Up`

      emb = new MessageEmbed()
        .setColor(color)
        .setDescription(`** Operation Unsuccessful** \n${reason}`)
       //.setFooter(client.footer)
      return message.reply({ embeds: [emb] })

    }

    let member = message.mentions.users.first() || message.author
    let level = await levels.get(`level_${member.id}_${message.guild.id}`) || 0
    let msg = await levels.get(`MsgS_${member.id}_${message.guild.id}`) || 0
    emb = new MessageEmbed()

    emb = new MessageEmbed()

      .setColor(color)
      .setAuthor({
        name: `Level Details of ${member.username}`,
        iconURL: member.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(member.displayAvatarURL({ dynamic: true }))
      .setDescription(`**Current level : **${level}\n**Message count :** \`${msg} Messages\``)
      .setFooter(`Keep Chatting To Gain More Xp.`)
    return message.reply({ embeds: [emb] })

  }
}