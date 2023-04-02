const { MessageEmbed } = require(`discord.js`)
//const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))



module.exports = {
  name: "gayrate",
  aliases: ["howgay", "gay"],
  edesc: "howgay",
  description: `sends random meme`,
  userPermissions: [],
  botPermissions: [],
  category: "Fun",
  cooldown: 5,



  run: async (client, message, args, prefix) => {

    color = client.main

    try {
      let Member =
        message.mentions.users.first() ||
        message.author;
      let Result = Math.floor(Math.random() * 101);

      let em = `<:level_bos_son:1078358927525281812><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result < 1) em = `<:level_bos_son:1078358927525281812><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
    if(Result < 11 && Result >1) em = `<a:level_dolu_bas:1078359269126184980><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result < 21 && Result >11) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result < 31 && Result >21) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result < 41 && Result >31) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result < 51 && Result >41) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result < 61 && Result >51) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result < 71 && Result >61) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><:level_bos_orta:1078359009351970969><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result <81 && Result >71) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><:level_bos_orta:1078359009351970969><:level_bos_bas:1078359068625862676>`
      if(Result < 91 && Result >81) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><:level_bos_bas:1078359068625862676>`
      if(Result < 101 && Result >91) em = `<a:level_dolu_bas:1078359269126184980><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_orta:1078359381080559637><a:level_dolu_son:1078359406539968533>`
   /* if(Result > 100) em = '50'
    if(Result > 50 && Result < 120) em = '45'*/
      message.reply({ embeds:[new MessageEmbed()
        .setColor(color)
        //.setFooter(ee.footertext, ee.footericon)
        .setTitle(`Gay Meter!`)
        .setDescription(`**${Member.username} Is ${Result}% Gay** \n${em}${Result}%`)
        .setTimestamp()]});
    } catch (e) {
      console.log(String(e.stack).bgRed)
      const errorLogsChannel = client.channels.cache.get(config.botlogs.errorLogsChannel);
      return errorLogsChannel.send({
        embeds: [new MessageEmbed()
          .setColor("RED")
          .setAuthor(message.guild.name, message.guild.iconURL({
            dynamic: true
          }))
          .setTitle(`${client.allEmojis.x} Got a Error:`)
          .setDescription(`\`\`\`${e.stack}\`\`\``)
          .setFooter(`Having: ${message.guild.memberCount} Users`)
        ]
      })
    }
  }
}