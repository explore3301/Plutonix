const { MessageEmbed } = require(`discord.js`)
const { o, s } = require("../../../settings/emojis.json")
module.exports = {
  name: "unban",
  aliases: [],
  edesc:"",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Moderation",
  cooldown: 0,
  docs: "",

  run: async (client, message, args, prefix) => {

   color = client.main     
  if(!message.guild.me.permissions.has(`BAN_MEMBERS`)) {

  const chutye = new MessageEmbed()

  .setDescription(`<:zzexclam:1074927834667176038> | **${message.author.tag}** 
\`\`\`diff
- I don't have enough permission(s) to run this command.
\`\`\``)

  .setColor(color)

return message.reply({embeds: [chutye]})

  }
          if(!message.member.permissions.has(`BAN_MEMBERS`)) 

           {

      message.reply({embeds: [new MessageEmbed().setColor(color).setDescription(`<:zzexclam:1074927834667176038> | **${message.author.tag}** 
\`\`\`diff
- Your top role should be above my top role.
\`\`\``)]})  

return;

        } 
        let reason = args.slice(1).join(" ");
            let userID = args[0];
      
            if (!reason) reason = 'No reason given.';
            if (!args[0]) return message.reply({ embeds:[new MessageEmbed()
         
              //.setColor('#2f3136')
              .setAuthor({
            name: 'Unban command',
            iconURL: client.user.displayAvatarURL({ dynamic: true })
            })
      .setDescription(`\`\`\`diff
- [] = optional argument
- <> = required argument
- Do NOT type these when using commands!
\`\`\`
> If someone realizes his mistake you should unban him`)
        .addField(`Aliases`, `\`No Aliases\``)
        .addField(`Usage`, `\`.unban <member> [reason=None]\``)
      .setColor(color)]});
               
               const embedd = new MessageEmbed()
                  .setColor(color)
                  .setDescription(`Something went wrong unbanning that user id.`)
            if (isNaN(args[0])) return message.reply({ embeds:[new MessageEmbed()
                  .setColor(color)                                             
              .setDescription(`The ID is not a number.`)]});
      
            message.guild.bans.fetch().then(async bans => {
              if (bans.size == 0) return message.reply({ embeds:[new MessageEmbed()
               
            .setColor(color)
                .setDescription(`This server does not have banned anyone.`)]});
              let bUser = bans.find(b => b.user.id == userID);
              if (!bUser) return message.reply({ embeds:[new MessageEmbed()
               
            .setColor(color)
                .setDescription(`The user ID mentioned is not banned.`)]});
              const done = new MessageEmbed()
              .setColor(color)
                  .setDescription(`Successfully unbanned [${bUser.user.tag}](https://discord.com/users/${bUser.user.id}).`)
             /* const donee = new MessageEmbed()
              .setColor('#2f3136')
                  .setDescription(`${client.success} Successfully unbanned [${bUser.user.tag}](https://discord.com/users/${bUser.user.id}) with reason: **${reason}**`) */
              await message.guild.members.unban(bUser.user, reason).catch(err => {
                console.log(err);
                return message.channel.send({embeds: [embedd] })
              }).then(() => { if(!args[1]) message.channel.send({embeds: [done]})
                             if(args[1]) message.channel.send(`Successfully Unbanned ${bUser.user.tag}`)
              })
            })
    
  }
}