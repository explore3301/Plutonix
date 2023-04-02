
const { MessageEmbed } = require(`discord.js`)

module.exports = {
  name: "horny",
  aliases: [],
  edesc: "",
  description: ``,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,



  run: async (client, message, args, prefix) => {    

    let user = message.mentions.members.first()
    if(!user)
        {
            message.reply({
        embeds: [
          new MessageEmbed()
            .setColor(client.main)
            .setDescription(`Invalid user provided`)
            .setFooter(client.footer)
        ]
      })
        }
    let av = user.displayAvatarURL({size:1024,format:"png"})
    let link = `https://some-random-api.ml/canvas/misc/horny/?avatar=${av}`
    let emb = new MessageEmbed()
      .setColor(client.main)
         .setImage(link)
      //.setFooter(`${user.tag}`)
    message.reply({ embeds: [emb] })

  }
}
