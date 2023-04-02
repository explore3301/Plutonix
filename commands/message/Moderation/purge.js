const { MessageEmbed } = require(`discord.js`)
const { o, s } = require("../../../settings/emojis.json")
module.exports = {
  name: "purge",
  aliases: ["clear"],
  edesc:"",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Moderation",
  cooldown: 0,
  docs: "",

  run: async (client, message, args, prefix) => {
    if (!message.member.permissions.has('MANAGE_MESSAGES')) {
      message.reply({embeds: [new MessageEmbed().setColor(client.main).setDescription(`You must have \`MANAGE_CHANNELS\` permission(s) to run this command.`)]})
    } 
    else {
      const amount = args[0];
      if (!amount) {
        message.reply({embeds: [new MessageEmbed().setColor(client.main).setDescription(`You must provide the number of messages to be deleted.`)]})
      } 
      else {
        if (!parseInt(amount)) {
          message.reply({embeds: [new MessageEmbed().setColor(client.main).setDescription(`You must provide a valid number of messages to be deleted.`)]})
        } else if (amount >= 1000) {
          message.reply({embeds: [new MessageEmbed().setColor(client.main).setDescription(`You can't delete more than **999** messages at a time.`)]})
        } else {
          await message.delete().catch((_) => { });
          Delete(message.channel, amount);
          message.channel.send({embeds: [new MessageEmbed().setColor(client.main).setDescription(`Successfully deleted ${amount} messages.`)]})
        }
      }
    }
  }
}

function Delete(channel, amount){
  for (let i = amount; i > 0; i-=100) {
    if (i > 100) {
      channel.bulkDelete(100).catch((_) => { });
    } else {
      channel.bulkDelete(i).catch((_) => { });
    }
  }
}