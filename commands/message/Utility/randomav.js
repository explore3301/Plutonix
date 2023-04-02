//const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'random-avatar',
  aliases: ['randomav'],
  usage: '',
  description: 'Shows the random user avatar!',
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

   run: async (client, message, args, prefix) => {
    try {
      const user = client.users.cache.random();

      return message.reply({ embeds:[new MessageEmbed()
        .setTitle(`Random Avatar`)
        .setColor(client.main)
       // .setFooter(ee.footertext, ee.footericon)
        .setImage(user.displayAvatarURL())]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
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