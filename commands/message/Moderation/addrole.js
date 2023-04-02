//const config = require(`${process.cwd()}/structures/botconfig/config.json`);
const {
  Client,
  Message,
  MessageEmbed
} = require('discord.js');

module.exports = {
  name: 'add-role',
  aliases: ['role', 'addrole'],
  usage: '@member [@role / role ID]',
  description: 'Add role for Member!',
  category: "Moderation",
  cooldown: 0,
  userPermissions: "MANAGE_ROLES",
  botPermissions: "MANAGE_ROLES",
  ownerOnly: false,
  toggleOff: false,

  /**
   * @param {Client} client 
   * @param {Message} message
   * @param {String[]} args
   */

  run: async (client, message, args, prefix) => {
      
      error = `<:zzexclam:1074927834667176038>`
    try {
      const mentionedMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
      const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

      if (!args[0]) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
         //.setFooter(ee.footertext, ee.footericon)
                 .setAuthor({
name: `I think you made a mistake!`,
iconURL: message.author.displayAvatarURL({ dynamic: true })
})
   .setDescription(`**Please try: \`.addrole <@member> [role ID / @role]\`**`)              .setFooter(`Powered By Nut`)
          /*.setDescription(`\`\`\`diff
- [] = optional argument
- <> = required argument
- Do NOT type these when using commands!
\`\`\`
> Gives a role to a user.`)
                 .addField(`Aliases`, `\`role\` | \`addrole\``)
.addField(`Usage`, `\`.add-role <@member> [role ID/@role]\``)*/
                 
        ]
      });
      if (!mentionedMember) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
         //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`User That You Have Mentioned Is Not In The **${message.guild.name}** server.`)
        ]
      });

/*
      if (mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
         //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`You cannot add roles to this user as thier role is the same or higher then yours.`)
        ]
      });*/
      if (!args[1]) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
          //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`You must mention a role to give to the member mentioned.`)
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
          .setDescription(`You cannot give this role as it is the same or above your current highest role.`)
        ]
      });
      if (message.guild.me.roles.highest.position <= role.position) return message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
          //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`I cannot add this roles as this role is the same or higher then mine.`)
        ]
      });
      await mentionedMember.roles.add(role.id).catch(err => console.log(err));
      await message.reply({
        embeds: [new MessageEmbed()
          .setColor(client.main)
         //.setFooter(ee.footertext, ee.footericon)
          .setDescription(`Successfully Added ${role} to ${mentionedMember}.`)
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