
const { MessageEmbed } = require(`discord.js`)

module.exports = {
  name: "kiss",
  aliases: [],
  edesc: "",
  description: ``,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,



  run: async (client, message, args, prefix) => {    

      let Member =
        message.mentions.users.first()
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
    let link = `https://images-ext-1.discordapp.net/external/cRqtdoOO6XWbRNMOKB-v3AEWTTfkV7qNhvKiIePrPmc/https/cdn.weeb.sh/images/B12LhT_Pb.gif`
  //  let link = `https://some-random-api.ml//animu/hug/?avatar=${av}`
    let emb = new MessageEmbed()
      .setColor(client.main)
    .setAuthor({ name: `${message.author.username} kissed ${Member.username}!!`, iconURL: message.author.displayAvatarURL({dynamic: true})})
    //.setDescription() 
         .setImage(link)
      //.setFooter(`${user.tag}`)
    message.reply({ embeds: [emb] })

  }
}
