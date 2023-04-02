const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");

// Command
module.exports = {
  name: "support",
  aliases: ['server'],
  category: 'Utility',
  run: async (client, message, args) => {
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Join")
        .setStyle("LINK")
        .setEmoji(`<:nutt_link:1073435875331022919>`)
        .setURL(`https://discord.gg/nutbot`)
    )
    
    // Sending
    message.reply({
      embeds: [new MessageEmbed().setColor(client.main)
 .setAuthor({ name: `${client.user.username} Headquarter.`, iconURL: client.user.displayAvatarURL({dynamic: true})})             //.setDescription(``)
              ],
      components: [button] });
  },
};