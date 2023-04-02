//const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: "suggestion",
  aliases: ["suggest"],
  usage: '',
  description: "bug command",
  category: "Utility",
  cooldown: 0,
  userPermissions: "",
  botPermissions: "",
 //ownerOnly: false,
  //toggleOff: false,

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args, prefix, ee) => {
    try {
      const msg = args.join(" ")
      if (!msg) return message.reply({ embeds:[new MessageEmbed()
        .setColor(client.main)
       //.setFooter(ee.footertext, ee.footericon)
        .setDescription(`Please specify a suggestion \`.suggestion <your suggestion>\``)]})

      message.reply({ embeds:[new MessageEmbed()
        .setColor(client.main)
        .setFooter('Thanks For Using NuT')
        .setDescription(`${message.author.username}, Thanks for your lovely suggestions!`)]})

      const bugChannel = client.channels.cache.get('1083790197222817882')
      if (!bugChannel) return;

      bugChannel.send({ embeds:[new MessageEmbed()
        .setColor(client.main )
        .setTitle(`__New Suggestion:__`)
        .setDescription(`**Author:**\n> ${message.author.username} | (${message.author.id})\n**Suggestion:**\n> ${msg}`)
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(`Suggestion From: ${message.guild.name} | (${message.guild.id})`, message.guild.iconURL({
          dynamic: true
        }))]})
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = client.channels.cache.get('1083784895438012516');
      return errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL({
            dynamic: true
          }))
          .setTitle(`${client.allEmojis.x} Got a Error:`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
          .setFooter(`Having: ${message.guild.memberCount} Users`)
        ]
      })
    }
  }
}