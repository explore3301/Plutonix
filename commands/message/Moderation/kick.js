const { MessageEmbed } = require(`discord.js`)
const { o, s } = require("../../../settings/emojis.json")
module.exports = {
  name: "kick",
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

      if (!message.member.permissions.has("KICK_MEMBERS")) {
        return message.reply({embeds: [new MessageEmbed().setColor(color).setDescription(`You must have \`KICK_MEMBERS\` permission(s) to run this command.`)]});
      }
      let isown = message.author.id == message.guild.ownerId;
      const user = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
      let rea = args.slice(1).join(" ") || "No Reason Provided"
      rea = `${message.author.tag} (${message.author.id}) | ` + rea;
      const alone = new MessageEmbed()
      .setDescription(`User Not Found`)
      .setColor(color)
      const xxx = new MessageEmbed()
        .setAuthor({
            name: 'Kick command',
            iconURL: client.user.displayAvatarURL({ dynamic: true })
            })
      .setDescription(`\`\`\`diff
- [] = optional argument
- <> = required argument
- Do NOT type these when using commands!
\`\`\`
> > Somebody is breaking rules simply kick him from the server as punishment`)
        .addField(`Aliases`, `\`No Aliases\``)
        .addField(`Usage`, `\`.kick <member> [reason=None]\``)
      .setColor(color)
              
      if(!user) return message.reply({embeds: [xxx]})
      if(user === undefined) return message.reply({embeds: [alone]})
      
      if(user.id === client.user.id) return message.reply(`<@${message.author.id}> You can't kick me lmao.`)
      
      if(user.id === message.guild.ownerId) return message.reply(`I can't kick the server owner.`)

    if(user.id === message.author.id) return message.reply(`You can't kick yourself.`)

  if(!user.bannable){
        const embed = new MessageEmbed()
        .setDescription(`My highest role is below <@${user.id}>`)
        .setColor(color)
        return message.reply({embeds: [embed]})
    }
      
      if(message.guild.me.roles.highest.position <= user.roles.highest.position && !isown){
        return message.channel.send({embeds: [new MessageEmbed().setColor(color).setDescription(`Sad:( My role is below than <@${user.id}>.`)]});
      }
      if(message.member.roles.highest.position <= user.roles.highest.position && !isown) {
        return message.channel.send({embeds: [new MessageEmbed().setColor(color).setDescription(`You can't kick them because your role is same as <@${user.id}> or the user have higher role than you.`)]});
      }
      
      /*if(!user.bannable){
        const embed = new MessageEmbed()
        .setDescription(`I can't ban this user.`)
        .setColor('#2f3136')
        return message.reply({embeds: [embed]})
    }*/
    user.kick({reason: rea})
    /*const done = new MessageEmbed()
    .setDescription(`Successfully banned **${user.user.tag}** from the server.`)
    .setColor('#2f3136')*/
    return message.channel.send(`Successfully kicked **${user.user.tag}**`)
    }
};