const { MessageEmbed, MessageActionRow, MessageButton } = require(`discord.js`);
const { o, s } = require("../../../settings/emojis.json");

module.exports = {
  name: "ping",
  aliases: [],
  edesc: "",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 0,
  docs: "",

  run: async (client, message, args, prefix) => {
    const latency = Date.now() - message.createdTimestamp;
    let color = client.main;
    if (client.ws.ping < 50) color = client.main;
    if (client.ws.ping > 100) color = client.main;
    if (client.ws.ping > 50 && client.ws.ping < 120) color = client.main;

    // Code
    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel(`Message Latency: ${latency}ms`)
        .setStyle('PRIMARY')
        .setCustomId('ping_button')
        .setDisabled(true)
    );

    message.reply({
      embeds: [
        new MessageEmbed()
          .setColor(color)
          .setAuthor(`${client.ws.ping}ms`, message.author.displayAvatarURL({ dynamic: true }))
      ],
      components: [row],
    });
  },
};
