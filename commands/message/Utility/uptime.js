const { MessageEmbed } = require(`discord.js`)
const { o, s } = require("../../../settings/emojis.json")
module.exports = {
  name: "uptime",
  aliases: [],
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Utility",

  run: async (client, message, args, prefix) => {

    let color = client.neutral
   const duration1 = Math.round((Date.now() - message.client.uptime)/1000);
    
    message.reply({embeds:[new MessageEmbed()
                          .setColor(color)
                          .setDescription(`I'm online from <t:${duration1}:R>`)
                          ]})
    

  }
}


