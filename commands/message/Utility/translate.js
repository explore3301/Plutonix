
const { MessageEmbed } = require(`discord.js`);
const translate = require('@iamtraction/google-translate')
const { check, space, cross, point } = require("../../../settings/emojis.json")


module.exports = {
  name: "translate",
  aliases: ["tr"],
  edesc: `tr < args > or reply to msg to translate`,
  description: `translates enter/mention-ed text`,
  userPermissions: ["SEND_MESSAGES"],
  botPermissions: ["SEND_MESSAGES"],
  category: "Utility",
  cooldown: 5,



  run: async (client, message, args, prefix) => {
    // Code

    let query = null

    if (args[0]) {
      query = args.join(" ")
    }
    else {
      try {
        let ref = await message.fetchReference()
        query = ref.content
      }
      catch (e) {
        query = null
      }
    }

    if (query != null) {
      message.delete()      
      let result = await translate(query, { to: "en" })
      let emb = new MessageEmbed()
      .setColor(client.main)
      .setDescription(`** Translated ** \n${result.text}`)
      .setFooter({text : `Uses gtranslate api - 95% accurate`})
      return message.channel.send({embeds : [emb]})
    }


    let reason = `No queries provided `
    let e = new MessageEmbed()
      .setColor(client.main)
      .setDescription(`${cross} ** Operation Unuccessful ** \n${reason}`)
    message.channel.send({ embeds: [e] })

  }
}