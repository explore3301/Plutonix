const { MessageEmbed } = require(`discord.js`)
const { o, s } = require("../../../settings/emojis.json")
module.exports = {
  name: "userinfo",
  aliases: ['ui'],
  edesc:"Get userinfo.",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Utility",
  cooldown: 0,

  run: async (client, message, args, prefix) => {

    const permissions = {
      "ADMINISTRATOR"              : "Administrator",
      "MANAGE_GUILD"               : "Manage Server",
      "MANAGE_ROLES"               : "Manage Roles",
      "MANAGE_CHANNELS"            : "Manage Channels",
      "BAN_MEMBERS"                : "Ban",
      "KICK_MEMBERS"               : "Kick",
      "MUTE_MEMBERS"               : "Mute",
      "MOVE_MEMBERS"               : "Move",
      "DEAFEN_MEMBERS"             : "Deafen",
      "MODERATE_MEMBERS"           : "Moderate",
      "MANAGE_EMOJIS"              : "Manage Emojis",
      "MANAGE_NICKNAMES"           : "Manage Nicknames",
      "MANAGE_WEBHOOKS"            : "Manage Webhooks",
      "MANAGE_MESSAGES"            : "Manage Messages",
      "MENTION_EVERYONE"           : "Mention Everyone"
    }

    const alone = {
        "online": "<:nutt_online:1077134659701456966>ONLINE",
        "dnd": "<:nutt_dnd:1077134788252676158>DND",
        "idle": "<:nutt_idle:1077134926136221726>IDLE",
        "offline": "<:nutt_offline:1077135046797959178>OFFLINE"
      }

  const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
 /*   const mention = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;*/

     //nickname 👇
        const nick = user.nickname === null ? "None" : user.nickname;
    //${user.nickname || "No Nickname Found"}
    const presence = user.presence;
      //status ${alone[presence.status]}
    
        //bot or wot? 👇
        var bot = {
            "true": "<:nutt_tikk:1073143424116605049> Yes",
            "false": "<:nutt_crss:1073143518211616808> No"
        };
    //usericon 👇
    const usericon = user.displayAvatarURL({dynamic: true});
    //badges 👇
                var flags = {
      "DISCORD_EMPLOYEE"           : "<:nutt_staffs:1077125213273215086> ",
      "DISCORD_PARTNER"            : "<:nutt_partner:1077125347801313290>",
      "BUGHUNTER_LEVEL_1"          : "<:nutt_bug1:1077125477359165511>",
      "BUGHUNTER_LEVEL_2"          : "<:nutt_BughunterLevel2:1077125586255884298>",
      "HYPESQUAD_EVENTS"           : "<:nutt_hypesquad_balance:1077125786689085450>",
      "HOUSE_BRILLIANCE"           : "<:nutt_Brilance:1077121629127184395>",
      "HOUSE_BRAVERY"              : "<:nutt_brilliance:1077117966816116776>",
      "HOUSE_BALANCE"              : "<:nutt_balance:1077126180228038756> ",
      "EARLY_SUPPORTER"            : "<:early_supporter:1069633302899732490>",
      "TEAM_USER"                  : "<:TeamUser:1069633591644016791>",
      "VERIFIED_BOT"               : "<:VerifiedBot:1069633989691850813>",
      "EARLY_VERIFIED_DEVELOPER"   : "<a:developer_bot:1069634330369990666>",
      "ACTIVE_DEVELOPER"              : "<:nutt_activedev:1077127034775556098>", "BOT_HTTP_INTERACTIONS" : "<:nutt_SupportsCommands:1077129615115571292>"
        }

    
    const userFlags = user.user.flags.toArray();
  
    /*let user_badges = []
    let badges_cache = [...user.user.flags] || "No Badges"
    for (const flag in flags) {
    badges_cache.includes(flag)?user_badges.push(flags[flag]):{}}
    let badges = user_badges.join(", ")*/
    //role 👇
        let user_roles = []
    let role_cache = [...user.roles.cache.values()]
    role_cache.forEach((role) => { user_roles.push(`<@&${role.id}>`) })
    user_roles.pop()
    let high = `<@&${user.roles.highest.id}>`
    let roles = user_roles.join(", ")


  // const rolexx = user.roles.cache.get === "" ? "None" : user.roles.cache.get;

    let user_perms = []
    let perms_cache = [...user.permissions] || "No Perms"
    for (const perm in permissions) {
    perms_cache.includes(perm)?user_perms.push("\`"+permissions[perm]+"\`"):{}}
    let perms = user_perms.join(", ")

   let banner = ""
    let banner_user = await client.api.users(user.id).get()
    banner_user.banner ? 
      banner = `https://cdn.discordapp.com/banners/${user.id}/${banner_user.banner}?size=4096` : 
      banner = null

    const xdd = new MessageEmbed()
  .setAuthor(user.user.tag, user.displayAvatarURL({ dynamic: true }))
  .setThumbnail(usericon)
  .addField(`__General Information__`, `>>> **Name:** ${user.user.tag}\n**Id:** ${user.user.id}\n**Nickname:** ${nick}\n**Bot:** ${bot[user.user.bot]}\n**Badges:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(' ') : 'None'}\n**Status:** ${alone[presence.status]}\n**Account Created:** <t:${Math.round(user.user.createdTimestamp/1000)}:R>\n**Server Joined:** <t:${Math.round(user.joinedTimestamp/1000)}:R>`)
  .addField(`__Role Info__`, `>>> **Highest Role:** ${high}\n**Role:** ${roles}\n**Color:** ${user.displayHexColor}`)
  .addField(`__Key Permissions__`, `>>> ${perms}`)
      
.setColor(user.displayHexColor)
  if(banner != null){xdd.setImage(banner)}
    
    message.reply({embeds: [xdd]})  


  }
}