const { MessageEmbed } = require(`discord.js`)
const { check, cross, space, point } = require("../../../settings/emojis.json")

module.exports = {
  name: "reloadl",
  aliases: ["rl"],
  edesc: "reloades command file",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Developer",
  cooldown: 0,

  run: async (client, message, args, prefix) => {
    // Code



    try {

      let reload = false;

      for (let i = 0; i < client.mcategories.length; i += 1) {

        let dir = client.mcategories[i]

        try {

          delete require.cache[require.resolve(`../../../commands/message/${dir}/${args[0]}.js`)]
          client.mcommands.delete(args[0])
          const pull = require(`../../../commands/message/${dir}/${args[0]}.js`)
          client.mcommands.set(args[0], pull)
          reload = true;

        } catch (e) { }

      }

      if (reload) {

        let res = ` Successfully reloaded command \`${args[0]}\``
        emb = new MessageEmbed()
          .setColor(client.main)
          .setDescription(`**Operation Successful:**\n${res}`)
        return message.channel.send({ embeds: [emb] })

      }

      let res = ` Couldn't reload command \`${args[0]}\``

      emb = new MessageEmbed()
        .setColor(client.main)
        .setDescription(`**Operation Unuccessful:**\n${res}`)
      return message.channel.send({ embeds: [emb] })

    } catch (e) {

      let res = ` Couldn't reload command \`${args[0]}\``

      emb = new MessageEmbed()
        .setColor(client.main)
        .setDescription(`**Operation Unuccessful **\n${res}`)
      return message.channel.send({ embeds: [emb] })

    }



  }
}


