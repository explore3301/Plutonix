const { MessageEmbed } = require(`discord.js`)
const { o, s } = require("../../../settings/emojis.json")
module.exports = {
  name: "ban",
  aliases: ["fuckoff", "hackban", "fuckban", "fuckyou"],
  edesc:"",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Moderation",
  cooldown: 0,
  docs: "",

  run: async (client, message, args, prefix) => {

    color = client.main
    //let lmao = Aliases 

    if (!message.member.permissions.has("BAN_MEMBERS")){
      return message.reply(`You must have \`BAN_MEMBERS\` permissions to run this command. `)
    }
    
      let isown = message.author.id == message.guild.ownerId;
const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
let rea = args.slice(1).join(" ") || "No Reason Provided"
rea = `${message.author.tag} (${message.author.id}) | ` + rea;
const alone = new MessageEmbed()
.setDescription(`User Not Found`)
.setColor(color)
const xxx = new MessageEmbed()
.setAuthor({
name: 'Ban Command',
iconURL: client.user.displayAvatarURL({ dynamic: true })
})
.setDescription(`\`\`\`diff
- [] = optional argument
- <> = required argument
- Do NOT type these when using commands!
\`\`\`
> Somebody is breaking rules again and again | ban him from the server as punishment`)
.addField(`Aliases`, `\`hackban\` | \`fuckban\` | \`fuckyou\` | \`fuckoff\``)
.addField(`Usage`, `\`.ban <member> [reason=None]\``)
.setColor(color)

if(!user) return message.reply({embeds: [xxx]})
if(user === undefined) return message.reply({embeds: [alone]})
    if(user.id === client.user.id) return message.reply(`<@${message.author.id}> You can't ban me lmao.`)

if(user.id === message.guild.ownerId) return message.reply(` I can't ban the server owner.`)

if(user.id === message.author.id) return message.reply(` You can't ban yourself.`)

if(!user.bannable){
const embed = new MessageEmbed()
.setDescription(`I can't!! My role is below than <@${user.id}>.`)
.setColor(color)
return message.reply({embeds: [embed]})
}

if(message.guild.me.roles.highest.position <= user.roles.highest.position && !isown){
return message.channel.send({embeds: [new MessageEmbed().setColor(color).setDescription(`Sad:( My role is below than <@${user.id}>.`)]});
}
if(message.member.roles.highest.position <= user.roles.highest.position && !isown) {
return message.channel.send({embeds: [new MessageEmbed().setColor(color).setDescription(`You can't ban them because your role is same as <@${user.id}> or the user have higher role than you.`)]});
}

/*if(!user.bannable){
const embed = new MessageEmbed()
.setDescription(`I can't ban this user.`)
.setColor('#2f3136')
return message.reply({embeds: [embed]})
}*/
user.ban({reason: rea})
/*const done = new MessageEmbed()
.setDescription(`Successfully banned **${user.user.tag}** from the server.`)
.setColor('#2f3136')*/
return message.channel.send({embeds: [new MessageEmbed().setColor(color).setDescription(`Successfully banned **${user.user.tag}** from the server.`)]})
                                      //.setImage(`https://media.discordapp.net/attachments/1079006328648896635/1079070439755751504/20230225_212632.jpg`)]})
    


  }
}
                            