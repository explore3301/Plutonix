const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
let cpuStat = require("cpu-stat")
const { o,s,x,point,arrow } = require("../../../settings/emojis.json")

module.exports = {
  name: "stats",
  aliases: ["stat","botinfo","bi","about"],
  description: `View the stats of the bot.`,
  userPermissions: [],
  botPermissions: ["EMBED_LINKS"],
  category: "Utility",
  cooldown: 5,
  docs: "",
  
  run: async (client, message, args, prefix, queue) => {

    const button = new MessageActionRow().addComponents(
      new MessageButton()
        .setLabel("Invite Me")
        .setStyle("LINK")
        .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
    )
      
     /* const duration1 = Math.round((Date.now() - message.client.uptime)/1000);*/
        let totalSeconds = message.client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days}d ${hours}h ${minutes}m `; //${uptime}
    
        try {
            let dev = [], cdev = [], supp =[];
            let user = await client.users.fetch(`201331146187997184`);//- derek_xd
            dev.push(`[${user.username}](https://discord.com/users/201331146187997184)`);
          user = await
client.users.fetch(`972461778309111878`);//- alone
            dev.push(`[${user.username}](https://discord.com/users/972461778309111878)`);
           /* user = await client.users.fetch(`704761801174286416`);//panda
            dev.push(`[${user.username}](https://discord.com/users/946776981138198679)`);*/
          /*  user = await client.users.fetch(`750927228006563872`);//Vanika
            dev.push(`[${user.username}](https://discord.com/users/750927228006563872)`); */

          /*  user = await client.users.fetch(`918776896727179284`);//AnnoMy
            supp.push(`[${user.username}](https://discord.com/users/918776896727179284)`); */
           /* user = await client.users.fetch(`926757287119450133`);//YuvaRaj
            supp.push(`[${user.username}](https://discord.com/users/926757287119450133)`);
*/

            const statsEmbed = new MessageEmbed()
			        .setColor(client.main)
              .setAuthor(`${client.user.username} `, client.user.displayAvatarURL())
              .setThumbnail(client.user.client.user.displayAvatarURL({dynamic: true}))
             .setDescription(`**Bot Name:** ${client.user.tag}\n**Bot Id:** ${client.user.id}\n**Library:** [discord.js](https://discord.js.org/#/)\n**Uptime:** ${uptime}\n**Bot Ping:** ${Math.round(client.ws.ping)}ms\n**Default Prefix:** .`)

              .addFields([
                {name: `__Stats__`, value: `**Total Servers:** ${client.guilds.cache.size}\n**Total Users:** ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}\n**Shards:** 1\n**Total Channels:** ${client.channels.cache.size}` },
                {name: `__Channels__`, value: `<:nutt_chnl:1076897860735484005> ${client.channels.cache.filter(channel => channel.type === 'GUILD_TEXT').size} | <:nutt_volh:1073200108910415942> ${client.channels.cache.filter(channel => channel.type === 'GUILD_VOICE').size} | <:nutt_stg:1076898051618250822> ${client.channels.cache.filter(channel => channel.type === 'GUILD_STAGE').size}`}, 

              ])
            

            /*  .addFields([
                {name: `__Support__`, value: `**[support server](https://discord.gg/3TXPEhww3E)** | **[Invite Autumn Bot](https://discord.com/api/oauth2/authorize?client_id=823512343387832320&permissions=8&scope=applications.commands%20bot)**`}
                ])
              */
              
              .addFields([
                {name: `__Developers__`, value: dev.join(` , `) }])
               /* {name: `__Trustees__`, value: supp.join(`, `) }
              ])*/
              //.setImage("https://media.discordapp.net/attachments/1062216124692967464/1065646083558084718/20230119_202652.jpg")
          .setFooter("Thanks For Using NuT", client.user.displayAvatarURL())
                    
  const r111 = new MessageActionRow().addComponents(
              new MessageButton().setLabel(`Servers: ${(client.guilds.cache.size)}`).setEmoji(`<:nutt_server:1073434827992342558>`).setStyle("SUCCESS").setCustomId("1").setDisabled(false),
              new MessageButton().setLabel(`Users: ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`).setEmoji(`<:nutt_users:1073435531058356264>`).setStyle("SUCCESS").setCustomId("2").setDisabled(false),
              new MessageButton().setLabel(`Channels: ${client.channels.cache.size}`).setEmoji(`<:nutt_chnl:1076897860735484005>`).setStyle("SUCCESS").setCustomId("3").setDisabled(false),
            )         
            message.channel.send({embeds: [statsEmbed], components : [r111] });
        } catch (e) {
          const emesdf = new MessageEmbed()
    			.setColor(client.color)
		    	.setAuthor(`An Error Occurred`)
			    .setDescription(`\`\`\`${e.message}\`\`\``);
			    return message.channel.send({embeds: [emesdf]});
        }

/*
    let totalSeconds = message.client.uptime / 1000;
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    let uptime = `${days}d ${hours}h ${minutes}m `; //${uptime}

    cpuStat.usagePercent(function(err, percent, seconds) {
      let emb = new MessageEmbed()

        .setColor(client.neutral)
        .addFields(
          {
            name: `${o}Shard [1/1]`,
            value: `${s+point} **Latency :** \`${client.ws.ping}\`\n`+
            `${s+point} **Uptime** : \`${uptime}\`\n`+
            `${s+point} **Resources:**\n`+
            `${s+s+arrow} **RAM :** \`${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB\`\n`+
            `${s+s+arrow} **CPU :** \`${percent.toFixed(4)} %\`\n`+
            `${s+point} **Size :**\n`+
            `${s+point} **Servers :** \`${(client.guilds.cache.size)}\`\n`+
            `${s+point} **Members :** \`${(client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0))}\`
            `,inline:true
          }
        )


      message.reply({ embeds: [emb] })
    }) */

  }
}
