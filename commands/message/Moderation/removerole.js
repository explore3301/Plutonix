
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'remove-role',
  aliases: ['rr', 'removerole'],
  usage: '@member [@role / role ID]',
  description: 'Remove role from Member!',
  category: "Moderation",
  cooldown: 0,
  userPermissions: "MANAGE_ROLES",
  botPermissions: "MANAGE_ROLES",

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

run: async (client, message, args, prefix) => {
    try {
      const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

      if (!args[0]) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
          //.setFooter(ee.footertext, ee.footericon)
       //   .setDescription(`You must mention a member to remove the role.`)
                                  .setAuthor({
name: 'remove-role',
iconURL: client.user.displayAvatarURL({ dynamic: true })
})
          .setDescription(`\`\`\`diff
- [] = optional argument
- <> = required argument
- Do NOT type these when using commands!
\`\`\`
> Remove a role to a user.`)
                 .addField(`Aliases`, `\`rrole\` | \`removerole\``)
.addField(`Usage`, `\`.remove-role <@member> [role ID/@role]\``)
        ]
      });
      if (!mentionedMember) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
          //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`The member mention is not in the server.`)
        ]
      });
      if (mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
         //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`You cannot remove roles from this user as thier role is the same or higher then yours.`)
        ]
      });
      if (!args[1]) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
          //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`You must mention a role to remove from the member mentioned.`)
        ]
      });
      if (!role) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
          //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`The role mention does not exist.`)
        ]
      });
      if (message.member.roles.highest.position <= role.position) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
          //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`You cannot remove this role as it is the same or above your current highest role.`)
        ]
      });
      if (message.guild.me.roles.highest.position <= role.position) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
         //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`I cannot remove this roles as this role is the same or higher then mine.`)
        ]
      });
      await mentionedMember.roles.remove(role.id).catch(err => console.log(err))
      await message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
         //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`Successfully Removed ${role} from ${mentionedMember}.`)
        ]
      })
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = client.channels.cache.get('1083784895438012516');
      return errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL({
            dynamic: true
          }))
          .setTitle(`Got a Error:`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
          .setFooter(`Having: ${message.guild.memberCount} Users`)
        ]
      })
    }
  }
}