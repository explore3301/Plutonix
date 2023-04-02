const { MessageEmbed } = require(`discord.js`)
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))



module.exports = {
  name: "quote",
  aliases: [],
  edesc: "",
  description: `sends random quotee`,
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 5,



  run: async (client, message, args, prefix) => {

    var url = await fetch("https://www.reddit.com/r/quotes/random/.json")
    var random = await url.json()

    let emb = new MessageEmbed()
      .setColor(client.main)
      .setTitle(`Hope this Motivates You :`)
      .setDescription(`${random[0].data.children[0].data.title}`)
      .setFooter(client.footer)
    message.reply({ embeds: [emb] })


  }
}