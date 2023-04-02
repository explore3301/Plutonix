const { MessageEmbed } = require(`discord.js`)
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))



module.exports = {
  name: "news",
  aliases: [],
  edesc: "",
  description: `sends random quotee`,
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 5,



  run: async (client, message, args, prefix) => {

    var url = await fetch("https://www.reddit.com/r/GoodNews/random/.json")
    var random = await url.json()

    let emb = new MessageEmbed()
      .setColor(client.main)
      .setTitle(`Reddit News:`)
      .setDescription(`${random[0].data.children[0].data.title}`)
      .setImage(random[0].data.children[0].data.url)
      .setFooter(client.footer)
    message.reply({ embeds: [emb] })


  }
}