const { Message, Client, MessageEmbed, MessageActionRow, MessageButton, MessageSelectMenu } = require("discord.js");

const { o, s } = require("../../../settings/emojis.json")
module.exports = {
  name: "unlock",
  aliases: [],
  edesc:"",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Moderation",
  cooldown: 0,
  docs: "",

  run: async (client, message, args, prefix) => {

   color = client.main

    if (!message.member.permissions.has('MANAGE_CHANNELS')){
      const error = new MessageEmbed()
        .setColor(color)
        .setDescription(`<:nutt_crss:1073143518211616808> | You must have \`MANAGE_CHANNELS\` permission(s) to run this command.`)
      return message.reply({embeds: [error]});
    }
    const channel = message.mentions.channels.first()  || message.guild.channels.cache.get(args[0])  ||  message.channel;
    if(channel.manageable){
    channel.permissionOverwrites.edit(message.guild.id, {
      SEND_MESSAGES: true,
      reason: `${message.author.tag} (${message.author.id})`
    })
    const emb = new MessageEmbed()
      .setDescription(`${channel} has been unlocked from @everyone role.`)
    .setImage(`https://media.discordapp.net/attachments/1079006328648896635/1079066724604846130/20230225_211516.jpg`)
      .setColor(color)
      return message.channel.send({embeds: [emb]})
    } 
  else {
      const embi = new MessageEmbed()
        .setDescription(`<:nutt_crss:1073143518211616808> | I don't have adequate permissions to lock this channel.`)
        .setColor(color)
      return message.channel.send({embeds: [embi]})
    }
  }
}