const { MessageEmbed } = require('discord.js');
module.exports = {
  name: "unmute",
  aliases: ["untimeout"],
  category: 'Moderation',
  run: async (client, message, args) => {

    color = client.main
    
    if (!message.member.permissions.has("TIMEOUT_MEMBERS")) {
      return message.reply({embeds: [new MessageEmbed().setColor(color).setDescription(`You must have \`TIMEOUT_MEMBERS\` permission(s) to run this command.`)]})
    }
    if(!message.guild.me.permissions.has('TIMEOUT_MEMBERS')){
      return message.reply({embeds: [new MessageEmbed().setColor(color).setDescription(`I don't have \`TIMEOUT_MEMBERS\` permission(s) to run this command.`)]})
    }
    let member = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
    if(!member){
      return message.reply({embeds: [new MessageEmbed().setColor(color).setDescription(`You didn't mentioned the member whom you want to unmute.`)]})
    }
    let reason = args.slice(1).join(" ").trim();
    if(!reason) reason = "No Reason";
    reason = `${message.author.tag} (${message.author.id}) | ` + reason;
    const response = await untimeout(message.member, member, reason);
    await message.reply(response);
  }
};
async function untimeout(issuer, target, reason) {
  let client = target.client;
  const response = await unTimeoutTarget(issuer, target, reason);
  if (typeof response === "boolean") return getEmbed(`Successfully unmuted <@${target.user.id}>!`, client);
  if (response === "BOT_PERM") return getEmbed(`I don't have enough permissions to unmute <@${target.user.id}>.`, client);
  else if (response === "MEMBER_PERM") return getEmbed(`You don't have enough permissions to unmute <@${target.user.id}>.`, client);
  else if (response === "NO_TIMEOUT") return getEmbed(`<@${target.user.id}> is not muted!`, client);
  else return getEmbed(`I don't have enough perms to unmute <@${target.user.id}>.`, client);
};

async function unTimeoutTarget(issuer, target, reason) {
  if (!memberInteract(issuer, target)) return "MEMBER_PERM";
  if (!memberInteract(issuer.guild.me, target)) return "BOT_PERM";
  if (target.communicationDisabledUntilTimestamp - Date.now() < 0) return "NO_TIMEOUT";

  try {
    await target.timeout(0, reason);
    return true;
  } catch (ex) {
    return "ERROR";
  }
};

function memberInteract(issuer, target) {
  const { guild } = issuer;
  if (guild.ownerId === issuer.id) return true;
  if (guild.ownerId === target.id) return false;
  return issuer.roles.highest.position > target.roles.highest.position;
};

function getEmbed(title, client){
  let embed = new MessageEmbed()
  .setColor(color)
  .setDescription(title)
  return { embeds: [embed] };
};