const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
let cpuStat = require("cpu-stat")
const { o,s,x,point,arrow } = require("../../../settings/emojis.json")

module.exports = {
  name: "membercount",
  aliases: ["mc"],
  description: `View the stats of the bot.`,
  userPermissions: [],
  botPermissions: ["EMBED_LINKS"],
  category: "Utility",
  cooldown: 5,
  docs: "",
  
  run: async (client, message, args, prefix, queue) => {
    let members = await message.guild.members.fetch()
    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    )
      
 

            const statsEmbed = new MessageEmbed()
			        .setColor(client.main)
              .setAuthor(`${message.guild.name} `, client.user.displayAvatarURL())
              //.setThumbnail(message.guild.iconURL({dynamic: true}))
    .setDescription(`**Total Members**\n> ${message.guild.memberCount} `)
              
            

          //.setFooter("Thanks For Using NuT", client.user.displayAvatarURL())
                    
  const r111 = new MessageActionRow().addComponents(
              new MessageButton().setLabel(`Humans: ${message.guild.members.cache.filter(x => x.user.bot != true).size}`).setEmoji(`<:nutt_sup:1073435792543854682>`).setStyle("SECONDARY").setCustomId("1").setDisabled(false),
              new MessageButton().setLabel(`Bots: ${message.guild.members.cache.filter(x => x.user.bot == true).size}`).setEmoji(`<:nutt_bot:1077083351216816168>`).setStyle("SECONDARY").setCustomId("2").setDisabled(false),
    
         /*    new MessageButton().setLabel(`Channels: ${client.channels.cache.size}`).setEmoji(`<:nutt_chnl:1076897860735484005>`).setStyle("SUCCESS").setCustomId("3").setDisabled(false),*/
            )        
            message.channel.send({embeds: [statsEmbed], components : [r111] });
        } 

  }

