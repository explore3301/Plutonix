const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

// Command
module.exports = {
  name: "invite",
  aliases: ['inv', 'i'],
  category: 'Utility',
  run: async (client, message, args) => {
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setEmoji(`<:nutt_link:1073435875331022919>`)
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=1047714595705458758&permissions=8&scope=bot%20applications.commands`)
    )
    
    // Sending
    message.reply({
      embeds: [new MessageEmbed().setColor(client.main)
 .setAuthor({ name: `Invite ${client.user.username}`, iconURL: client.user.displayAvatarURL({dynamic: true})})             //.setDescription(``)
              ],
      components: [button] });
  },
};