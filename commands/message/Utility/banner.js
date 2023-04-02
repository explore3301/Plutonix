const { MessageEmbed } = require(`discord.js`);
const { o, s } = require("../../../settings/emojis.json");
const axios = require("axios");

module.exports = {
  name: "banner",
  aliases: ["banner-user"],
  edesc: "Get the latency of the bot.",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 0,

  run: async (client, message, args, prefix) => {

    color = client.main
    let user = null;

    if (!args[0]) {
      user = message.author;
    } else {
      const mention = message.mentions.users.first();
      if (mention) {
        user = mention;
      } else {
        
        const userId = args[0].replace(/[^0-9]/g, '');
        user = await client.users.fetch(userId, false).catch(() => {});

        
        if (!user) {
          return message.reply("Invalid user ID or mention!");
        }
      }
    }

    const data = await axios.get(`https://discord.com/api/users/${user.id}`, {
      headers: {
        Authorization: `Bot ${client.token}`
      }
    }).then(d => d.data);

    if (data.banner) {
      let url = data.banner.startsWith("a_") ? ".gif?size=4096" : ".png?size=4096";
      url = `https://cdn.discordapp.com/banners/${user.id}/${data.banner}${url}`;
      message.channel.send({
        embeds: [
          new MessageEmbed()
            .setColor(color)
          .setAuthor({ name: `${user.tag}`, iconURL: user.displayAvatarURL({dynamic: true})})
            .setDescription(`[\`PNG\`](${url}) | [\`JPG\`](${url}) | [\`GIF\`](${url})`)
            .setFooter(`Requested By: ${message.author.tag}`)
            .setImage(url)
        ]
      });
    } else {
      message.channel.send({
        embeds: [
          new MessageEmbed()
            .setColor(color)
            .setDescription(`User Don't Have Any Banner`)
        ]
      });
    }
  }
};
