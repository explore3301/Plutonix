const { Message, Client, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

const { o, s } = require("../../../settings/emojis.json")
module.exports = {
  name: "hideall",
  aliases: [],
  edesc:"",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Moderation",
  cooldown: 0,
  docs: "",

  run: async (client, message, args, prefix) => {
    if (!message.member.permissions.has('MANAGE_CHANNELS')){
      let error = new MessageEmbed()
        .setColor(client.main)
        .setDescription(`You must have \`MANAGE_CHANNELS\` permission(s) to run this command.`)
      return message.reply({embeds: [error]});
    }
    /*if(client.util.hasHigher(message.member) == false){
      let error = new MessageEmbed()
        .setColor(client.color)
        .setDescription(`Your highest role must be higher than my highest role to use this command.`)
      return message.reply({embeds: [error]});
    }*/
    let hided = 0;
    const channel = message.mentions.channels.first()  || message.guild.channels.cache.get(args[0])  ||  message.channel;
    message.guild.channels.cache.filter(c => c.name).forEach(channel => {
      if(channel.manageable){
        channel.permissionOverwrites.edit(message.guild.id, {
          VIEW_CHANNEL: false,
          reason: `${message.author.tag} (${message.author.id})`
        })
        hided++;
      }
    })
    message.channel.send({embeds: [new MessageEmbed().setColor(client.main).setDescription(`Successfully **hidden** ${hided} channels from this server.`)]})
  }
}