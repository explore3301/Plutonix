
const { MessageEmbed } = require(`discord.js`)

module.exports = {
  name: "hug",
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
    let link = `https://i.some-random-api.ml/JFELGva38L.gif`
  //  let link = `https://some-random-api.ml//animu/hug/?avatar=${av}`
    let emb = new MessageEmbed()
      .setColor(client.main)
    .setAuthor({ name: `${message.author.username} gives ${Member.username} a bigg hug!!`, iconURL: message.author.displayAvatarURL({dynamic: true})})
    //.setDescription() 
         .setImage(link)
      //.setFooter(`${user.tag}`)
    message.reply({ embeds: [emb] })

  }
}
