const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "serverbanner",
  aliases: ['guildbanner', 'sbanner'],
  category: 'Utility',
  run: async (client, message, args) => {


   if(message.guild.banner) {
        let embed = new MessageEmbed()
        //  .setTitle(`SERVER BANNER`)
        .setAuthor({ name: `${message.guild.name}`, iconURL: message.guild.iconURL({dynamic: true})})
          .setColor(client.main)
          .setImage(message.guild.bannerURL({size: 4096}))
        .setFooter(`Requested by: ${message.author.tag}`, message.author.avatarURL({dynamic: true}))
        message.reply({embeds: [embed]})
      } else {
        let embed = new MessageEmbed()
          .setDescription(`This Server has no Banner!`)
          .setColor(client.main)
          
          
        message.reply({embeds: [embed]})
      }
  }
}