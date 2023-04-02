const { MessageEmbed } = require(`discord.js`);
const { o, s } = require("../../../settings/emojis.json");

module.exports = {
  name: "servericon",
  aliases: ['guildicon', 'serverlogo', 'serveravatar'],
  edesc: "Get the latency of the bot.",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 0,

  run: async (client, message, args, prefix) => {

       color = client.main
  //  let user = null;

  /*  if (!args[0]) {
      user = message.author;
    } else {
      const mention = message.mentions.users.first();
      if (mention) {
        user = mention;
      } else {
        // Try to find the user by ID
        const userId = args[0].replace(/[^0-9]/g, '');
        user = await client.users.fetch(userId, false).catch(() => {});

        // If the user is not found by ID, try to find the user by username
        if (!user) {
          const username = args[0].toLowerCase();
          user = client.users.cache.find(u => u.username.toLowerCase() === username);
        }

        // If the user is still not found, return an error message
        if (!user) {
          return message.reply("Invalid user ID or username!");
        }
      }
    }
*/
      const guild = message.guild
      
    const isAnimated = guild.icon.startsWith('a_') && guild.iconURL({ dynamic: true }).endsWith('.gif');

    const pngUrl = guild.iconURL({ dynamic: true, size: 2048, format: "png" });
    const jpgUrl = guild.iconURL({ dynamic: true, size: 2048, format: "jpg" });

    const description = isAnimated
      ? `[\`PNG\`](${pngUrl}) | [\`GIF\`](${guild.iconURL({ dynamic: true })})`
      : `[\`PNG\`](${pngUrl}) | [\`JPG\`](${jpgUrl})`;

    const embed = new MessageEmbed()
      .setImage(guild.iconURL({ dynamic: true, size: 2048 }))
      .setAuthor({ name: `${guild.name}`, iconURL: client.user.displayAvatarURL({dynamic: true})})
      .setDescription(description)
      .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
      .setColor(color);

    message.reply({ embeds: [embed] });
  }
};
