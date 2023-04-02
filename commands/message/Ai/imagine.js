const { Configuration, OpenAIApi } = require("openai")
const configuration = new Configuration({
  apiKey: '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',
})
const openai = new OpenAIApi(configuration)
const { MessageEmbed } = require(`discord.js`)

const { o, x, s, arrow, point } = require("../../../settings/emojis.json")


module.exports = {
  name: "imagine",
  aliases: ["img", "i"],
  description: `Generates images | +img <query>`,
  userPermissions: [],
  botPermissions: [],
  category: "Ai",
  cooldown: 1,



  run: async (client, message, args, prefix) => {
    // Code


    message.reply({
      embeds: [
        new MessageEmbed()
          .setDescription(`<a:Green:1083685617575133245> | Generating Your Imagination`)
          .setColor(client.main)
          //.setFooter(client.footer)
      ]
    })
      .then(async (m) => {
        try {
          const response = await openai.createImage({
            prompt: args.join(" "),
            n: 1,
            size: "1024x1024",
          })
          m.edit({
            embeds: [
              new MessageEmbed()
                .setDescription("Imagined・" + args.join(" "))
                .setImage(response.data.data[0].url)
                .setColor(client.main)
               // .setFooter(``)
                .setFooter("Powered By NuT-Ai", client.user.displayAvatarURL())

            ]
          })
        } catch (error) {
          if (error.response) {
            m.edit({
              embeds: [
                new MessageEmbed()
                  .setDescription(error.response.data.error.message)
                  .setColor(client.main)
                  //.setFooter(client.footer)

              ]
            })
          } else {
            m.edit({
              embeds: [
                new MessageEmbed()
                  .setDescription(error.message)
                  .setColor(client.main)
                  //.setFooter(client.footer)

              ]
            })

          }
        }
      })

  }
}