//client
const client = require("../../index")
//permissions
const { Permissions, MessageEmbed } = require("discord.js")
//cooldown 
const { cooldown } = require("../../handlers/functions")
//emojis
const { o, x, s, arrow } = require("../../settings/emojis.json")

client.on("interactionCreate", async (interaction) => {
  // Slash Command Handling
  if (interaction.isCommand()) {
    const cmd = client.commands.get(interaction.commandName)
    if (!cmd)
      return interaction.reply(
        {
          embeds: [
            new MessageEmbed()
              .setColor(client.wrong)
              .setDescription(`${x} ** Operation Unsucessful** \n*${s + s + arrow}Command doesn't exist*`)
          ]
        })


    const args = []
    for (let option of interaction.options.data) {
      if (option.type === 'SUB_COMMAND') {
        if (option.name) args.push(option.name)
        option.options?.forEach((x) => {
          if (x.value) args.push(x.value)
        })
      } else if (option.value) args.push(option.value)
    }
    interaction.member = interaction.guild.members.cache.get(
      interaction.user.id
    )

    if (cmd) {
      // checking user perms
      if (
        !interaction.member.permissions.has(
          Permissions.FLAGS[cmd.userPermissions] || []
        )
      ) {
        return interaction.reply(
          {
            embeds: [
              new MessageEmbed()
                .setColor(client.wrong)
                .setDescription(`${x} ** Usage Denied !** \n*${s + s + arrow}You are not eligible to use that command*`)
                .setFooter({ text: `You need ${cmd.userPermissions} Permission to Use ${cmd.name} Command!!` })
            ]
          })


      } else if (
        !interaction.guild.me.permissions.has(
          Permissions.FLAGS[cmd.botPermissions] || []
        )
      ) {
        return interaction.reply(
          {
            embeds: [
              new MessageEmbed()
                .setColor(client.wrong)
                .setDescription(`${x} ** Operation Unsucessful** \n*${s + s + arrow}I can't use that command*`)
                .setFooter({ text: `I need ${cmd.botPermissions} Permission to Use ${cmd.name} Command!!` })
            ]
          })
      } else if (cooldown(interaction, cmd)) {
        return interaction.reply({
          embeds: [
            new MessageEmbed()
              .setColor(client.wrong)
              .setDescription(`${x} ** Usage Denied !** \n*${s + s + arrow}You are On Cooldown , wait \`${cooldown(interaction, cmd).toFixed()}\` Seconds*`)
          ]
        })
      } else {
        cmd.run(client, interaction, args)
      }
    }
  }
}
          )
