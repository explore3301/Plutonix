//client
const client = require("../../index")
//importing prefix
const { PREFIX } = require("../../settings/config")
//permissions and messageembed
const { np, bl } = require("../../handlers/database")
const { Permissions, MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
//const { MessageEmbed, MessageButton, MessageActionRow } = require('discord.js');
//cooldown and escaperegex functions
const { cooldown, escapeRegex } = require("../../handlers/functions")
//emojis
const { o, x, s, arrow, point } = require("../../settings/emojis.json")



//message command handler
client.on("messageCreate", async (message) => {

  //ignore if message.author is bot
  if (message.author.bot) return
  
  let noprefix = await np.get(`${message.author.id}`) || 0
  let blacklisted = await bl.get(`${message.author.id}`) || 0
  
  if (noprefix == 1 && !message.content.startsWith(prefix) && !message.content.includes(client.user.id)) PREFIX = ""
  //mentionprefix
  let mentionprefix = new RegExp(`^(<@!?${client.user.id}>|${escapeRegex(PREFIX)})\\s*`)

  //checking if message starts with mentionprefix
  if (!mentionprefix.test(message.content)) return

  //final prefix to be used for commands
  const [botprefix] = message.content.match(mentionprefix)

  //isolate args from message
  const args = message.content.slice(botprefix.length).trim().split(/ +/)

  //isolate command from message
  const cmd = args.shift().toLowerCase()
   const row = new MessageActionRow()
  .addComponents(
    new MessageButton()
    .setLabel(`Invite`)
    .setStyle('LINK')
      .setEmoji(`<:nutt_link:1073435875331022919>`)
    .setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`)
  ,
    new MessageButton()
  .setLabel(`Support`)
  .setStyle('LINK')
      .setEmoji(`<:nutt_sup:1073435792543854682>`)
  .setURL(`https://discord.gg/nutbot`),
      new MessageButton()
  .setLabel(`Vote`)
  .setStyle('LINK')
      .setEmoji(`<:nutt_sync:1073435927915008080>`)
  .setURL(`https://top.gg/bot/1047714595705458758/vote`)
  )

  //message to show when someone mentions the bot
  if (cmd.length == 0 && botprefix.includes(client.user.id)) {
    return message.reply({
      embeds: [
        //defining mention embed
        new MessageEmbed()
          .setAuthor({
            name: client.user.username,
            iconURL: client.user.displayAvatarURL({ dynamic: true }),
          //  url: `https://home.1st-services.repl.co`
          })
          .setDescription(`・My Prefix Is: \`.\`\n・Type \`.help\` To Get Commands List\n・Guild Id: ${message.guild.id}`)
          .setFooter(`Powered By: Total Fun Org.`)

          .setColor(client.main)
       /*   .addFields(
            {
              name: `My prefix is\`${PREFIX}\``,
              value: `${s+point}To get started type: \`${PREFIX}help\``,
            }
          )*/
          .setThumbnail(client.user.displayAvatarURL())

      ], components: [row] })
    
 }

  //check if the command issued exists
  const command =
    client.mcommands.get(cmd) ||
    client.mcommands.find((cmds) => cmds.aliases && cmds.aliases.includes(cmd))

  //if command not found
  if (!command) return

    if (blacklisted != 0) {
    return message.reply(
      {
        embeds: [
          new MessageEmbed()
            .setColor("#000000")
            .setDescription(
              `${x} ** Usage Denied !** \n` +
              `${s + s + arrow}You are not eligible to use ${client.user.username}` +
              `You are blacklisted / banned from using me !! Please appeal @ [Support](${client.support})`
            )
            .setFooter(client.footer)
        ]
      })
  }
  //if exists -> check if member has required permissions
  if (!message.member.permissions.has(Permissions.FLAGS[command.userPermissions] || []) && (!client.developer.includes(message.author.id))//developer bypass
  ) {
    return message.reply(
      {
        embeds: [
          new MessageEmbed()
            .setColor(client.wrong)
            .setDescription(`${x} ** Usage Denied !** \n*${s + s + arrow}You are not eligible to use that command*`)
            .setFooter({ text: `You need ${command.userPermissions} Permission to Use ${command.name} Command!!` })
        ]
      })
  }

  //if exists and member has required permissions
  if (command) {
    //check if user is under cooldown
    if (cooldown(message, command) && !client.developer.includes(message.author.id)) {
      //send msg to inform that user is under cooldown
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setColor(client.wrong)
            .setDescription(`${x} ** Usage Denied !** \n*${s + s + arrow}You are On Cooldown , wait \`${cooldown(message, command).toFixed()}\` Seconds*`)
        ]
      })
    }
    else {
      if (command.category == "Developer" && !client.developer.includes(message.author.id)) return message.reply({
        embeds: [
          new MessageEmbed()
            .setColor(client.wrong)
            .setDescription(`${x} ** Usage Denied !** \n*${s + s + arrow}You are not eligible to use that command*`)
        ]
      })
      //try to run the command
      try {
        command.run(client, message, args, botprefix)
      }
      //catch errors if unable to run
      catch (e) {
        //console.log the error
        console.error(e)
      }
    }
  }
})
