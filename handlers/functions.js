const {
  Interaction,
  Collection
} = require("discord.js")
const client = require("../index")


function cooldown(interaction, cmd) {
  if (!interaction || !cmd) return
  let { client, member } = interaction
  if (!client.cooldowns.has(cmd.name)) {
    client.cooldowns.set(cmd.name, new Collection())
  }
  const now = Date.now()
  const timestamps = client.cooldowns.get(cmd.name)
  const cooldownAmount = cmd.cooldown * 1000
  if (timestamps.has(member.id)) {
    const expirationTime = timestamps.get(member.id) + cooldownAmount
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000
      return timeLeft
    } else {
      timestamps.set(member.id, now)
      setTimeout(() => timestamps.delete(member.id), cooldownAmount)
      return false;
    }
  } else {
    timestamps.set(member.id, now)
    setTimeout(() => timestamps.delete(member.id), cooldownAmount)
    return false
  }
}





function status() {

  let name = client.user.username
  let prefix = client.prefix
  let guilds = client.guilds.cache.size
  let users = client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)
  let statuses = [
  `to .help`  
]
let e = statuses.length
  
  i = Math.floor(Math.random() * (e))
  client.user.setActivity(statuses[i],
    {
      type: "LISTENING"
    });

}


function escapeRegex(newprefix) {
  return newprefix.replace(/[.*+?^${}()|[\]\\]/g, `\\$&`)
}


function dhms(ms) {
  let res = Math.floor(ms / (1000 * 60 * 60 * 24)) + "d " + Math.floor(ms / (1000 * 60 * 60)) % 24 + "h " + Math.floor(ms / (1000 * 60)) % 60 + "m"
  return res
}

module.exports = {
  escapeRegex,
  cooldown,
  status,
  dhms
};
