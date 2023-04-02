const { MessageEmbed } = require(`discord.js`);
const { configs, levels } = require('../../../handlers/database.js')
const { space, cross, point } = require("../../../settings/emojis.json")


module.exports = {
  name: "leaderboard",
  aliases: ["lb", "toprank", "top"],
  edesc: "top",
  description: `get level leaderboard`,
  userPermissions: [],
  botPermissions: [],
  category: "Levels",
  cooldown: 5,

  run: async (client, message, args, prefix) => {

    //code


    let status = await configs.get(`level_${message.guild.id}`) || null

    if (status == null || status == 0) {

      reason = `Level system is not Set-Up`

      emb = new MessageEmbed()
        .setColor(client.main)
        .setDescription(`** Operation Unsuccessful ** \n${reason}`)
        .setFooter(client.footer)
      return message.reply({ embeds: [emb] })

    }

    a = await levels.keys
    x = a.filter((f) => f.startsWith("level") && f.includes(message.guild.id))
    y = await levels.values

    let array_data = []

    for (let i = 0; i < x.length; i++) {
      const key_data = await levels.get(x[i])
      array_data.push({ key: x[i], data: key_data })
    }

    array_data.sort((a, b) => b.data - a.data)
    let desc = []
    
    for (i = 0; i <array_data.length && i < 10; i++) {
      let c = array_data[i].key.split("_")
      let d = array_data[i].data
      desc.push(`**${i+1}.** <@${c[1]}> [Level ${d}]`)
    }
    emb = new MessageEmbed()

      .setTitle(`Level Leaderboard`)
      .setColor(client.main)
      .setDescription(desc.join("\n"))
     .setFooter(`Keep Chatting To Gain More Xp.`)
    return message.reply({ embeds: [emb] })

  }
}
