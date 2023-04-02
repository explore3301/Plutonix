const { Message, Client, MessageEmbed } = require("discord.js");

module.exports = {
  name: "steal",
  aliases: ['addemote' , 'addemoji'],
  category: 'Utility',
  run: async (client, message, args) => {
    if (!message.member.permissions.has("MANAGE_EMOJIS")){
      return message.channel.send({embeds: [new MessageEmbed().setColor(client.main).setDescription(`You must have \`MANAGE_EMOJI\` perms to use this command.`)]}); 
    }    
    if (!message.guild.me.permissions.has("MANAGE_EMOJIS")){
      return message.channel.send({embeds: [new MessageEmbed().setColor(client.main).setDescription(`I must have \`MANAGE_EMOJI\` perms to use this command.`)]}); 
    }
    let emoji = args[0];
    if(!emoji){
      return message.reply({embeds: [new MessageEmbed().setColor(client.main).setDescription(`You didn't provided any emoji to add.`)]})
    }
    let emojiId = null;
    try{
      emojiId = emoji.match(/([0-9]+)/)[0];
    }catch(err){
    }
    if(!emojiId){
      return message.reply({embeds: [new MessageEmbed().setColor(client.main).setDescription(`You provided an invalid emoji.`)]})
    }
    let name = args[1] || 'nutt_emoji';
    let link = `https://cdn.discordapp.com/emojis/${emojiId}`;
    try{
      await message.guild.emojis.create(link, name).then((newEmoji) => {
        message.reply({embeds: [new MessageEmbed().setColor(client.main).setDescription(`Successfully added the emoji ${newEmoji.toString()}.`)]})
      })
    }catch(err){
      message.reply({embeds: [new MessageEmbed().setColor(client.main).setDescription(`I was unable to add the emoji.\nPossible Reasons: \`Mass emojis added\`, \`Slots are Full\`.`)]});
    }
  }
}