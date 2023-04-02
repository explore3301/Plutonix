const client = require("../../index");
const { MessageEmbed } = require("discord.js");
const { levels , configs } = require('../../handlers/database.js')
const { bell, stats } = require("../../settings/emojis.json")

client.on("messageCreate", async (message) => {
  if (message.author.bot || !message.guild || !message.id) return;
  if (message.content.toLowerCase().startsWith("?"))return;

  let ch = await configs.get(`level_${message.guild.id}`) || null
  if (ch != null) {
    var channel = client.channels.cache.get(ch)
  }

  if (channel) {

    let memberId = message.author.id;

    let totalMsgS = await levels.get(`MsgS_${message.author.id}_${message.guild.id}`) || 0
    let currentLevel = await levels.get(`level_${message.author.id}_${message.guild.id}`) || 0

    
    if (totalMsgS < (5 * currentLevel + 1)) {
      let newTotal = totalMsgS + 1
      await levels.set(`MsgS_${memberId}_${message.guild.id}`, newTotal)
    } else {

      let newLevel = currentLevel + 1
      await levels.set(`level_${memberId}_${message.guild.id}`, newLevel)

      let emb = new MessageEmbed()
        .setTitle("Congratulations <a:ev_tada:1077966902133018654>")
        .addFields(
          {
            name: `<a:gift3:1077966762416558130> You just levelled Up !`,
            value: `${message.author} You are now : LEVEL ${newLevel}`
          },
          {
            name: `<a:gift3:1077966762416558130> Keep UP !`,
            value: `Keep Messaging to Level Up !
        Number of Messages reset to default !`
          }
        )
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setColor(`#303136`)
        .setTimestamp()

      await levels.set(`MsgS_${memberId}_${message.guild.id}`, 0)

      channel.send({ embeds: [emb] })
    }
  }
})