const client = require("../../index")
const { MessageEmbed, WebhookClient } = require('discord.js');
const join = new WebhookClient({ url: 'https://discord.com/api/webhooks/1079438544235409509/17Of7g0LoAZj9_Pbc-v_Px32dW-TOVIvFMnHTIwCxWrCM16h97P-2AVcoR_8u6zOE_tJ'});
const leave = new WebhookClient({ url: 'https://discord.com/api/webhooks/1079357593237069864/i18QYWxmXHdqki9qv1pQrlyfz4innIx6ygR1P9BGcic3UANZGIxvMQVwXPPf2ZjYyaeZ'});

client.on('guildCreate', async (guild) => {
  const owner = await guild.fetchOwner()
  
  const newguild = new MessageEmbed()
  .setColor(client.main)
  .setTitle("Guild Joined")
  .setAuthor(client.user.tag, client.user.displayAvatarURL())
  .setThumbnail(guild.iconURL({ dynamic: true }))
  .setDescription(`**Server Name** ${guild.name}\n**Server ID** ${guild.id}\n**Owner Tag** - ${owner.user.tag}\n**Owner ID** - ${owner.id}\n**Members** ${guild.memberCount}\n\n__Now NuT Have__\n**Servers:** ${client.guilds.cache.size}\n**Total Users:** ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`)
  .setTimestamp()
    
    join.send({ embeds: [newguild]})
});

client.on('guildDelete', async (guild) => {
  const owner = await guild.fetchOwner()
  
  const lostguild = new MessageEmbed()
  .setColor("#e71d1d")
  .setTitle("Guild Leave")
  .setAuthor(client.user.tag, client.user.displayAvatarURL())
  .setThumbnail(guild.iconURL({ dynamic: true }))
  .setDescription(`**Server Name** ${guild.name}\n**Server ID** ${guild.id}\n**Owner Tag** - ${owner.user.tag}\n**Owner ID** - ${owner.id}\n**Members** ${guild.memberCount}\n\n__Now NuT Have__\n**Servers:** ${client.guilds.cache.size}\n**Total Users:** ${client.guilds.cache.reduce((acc, guild) => acc + guild.memberCount, 0)}`)
  .setTimestamp()
    
    leave.send({ embeds: [lostguild]})
});