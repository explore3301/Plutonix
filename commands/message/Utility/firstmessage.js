const {  Client, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js");
const { o, x, point, arrow, s } = require("../../../settings/emojis.json")

module.exports = {
  name: "firstmsg",
  aliases: ["firstmessage"],
  category: 'Utility',
  run: async (client, message, args) => {
    
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel(`Go to the first message of ${message.channel.name}`)
        .setStyle('LINK')
          .setURL(msg.url)
    )

   const fetchMessages = await message.channel.messages.fetch({
      after: 1,
      limit: 1,
    });
    const msg = fetchMessages.first();

     const embed = new MessageEmbed()


.setAuthor({ name: `${client. user.tag}`, iconURL: client.user.displayAvatarURL({dynamic: true})})


        //.setTitle(`First Messsage in ${message.guild.name}`)
       // .setURL(msg.url)
       // .setDescription("Content: " + msg.content)
      // .addField("Author", `${msg.author}`)
      //  .addField('Message ID', `${msg.id}`)
      //  .addField('Created At', `${message.createdAt.toLocaleDateString()}`)
    .setColor(client.main)
    message.reply({ embeds: [embed], components: [button] })
  }
}