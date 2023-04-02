const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "snipe",
  aliases: [],
  edesc: "",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 0,
  docs: "",

  run: async(client,message,args) => {
    const msg = client.snipes.get(message.channel.id)
    if(!msg) return

    const embed = new MessageEmbed()
    .setDescription(`<:trash:1086320564622327878> __**Message Deleted in**__ <#${message.channel.id}>\n\n` + '<:r_message:1086320204038021130> __**Message by**__ : ' + `<@${msg.author}>\n` + '  \n__**Contents:**__  \n' + msg.content)
    .setTimestamp()
    .setColor('#04FBA0')

    if(msg.deleted) embed.addField("<:delete:1086319725421789254> __**Deleted By**__", `<@${msg.deletedBy}>`)

    if(msg.image) embed.setImage(msg.image)
    message.channel.send({ embeds: [embed] })
  }  
}
