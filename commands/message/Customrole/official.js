const { MessageEmbed } = require(`discord.js`);
//const Settings = require('../../core/settings.js');
const { xd } = require('../../../handlers/database.js')

module.exports = {
    name : "official",
    aliases : ["off"],
    category : "Customrole",
    run: async (client, message, args, prefix) => {
       // let prefix = await client.db.get(`prefix_${message.guild.id}`);
      //  if(!prefix) prefix = Settings.bot.info.prefix;
      color = client.main 
        let reqRole = await xd.get(`reqrole_${message.guild.id}`);
        if(!reqRole || reqRole == null){
            return message.channel.send({embeds : [new MessageEmbed().setColor(color).setDescription(`There is no **Required Role** for **Custom Roles**`)]})
        }

        if(!message.member.permissions.has("ADMINISTRATOR") && message.author.id != message.guild.ownerId  && !message.member.roles.cache.has(reqRole)){ return message.channel.send({embeds : [new MessageEmbed().setColor(color).setDescription(`You are not allowed to run these command.`)]}) }

        if(!args[0]){
            return message.channel.send({embeds : [new MessageEmbed().setColor(color).setDescription(`Usage : \`${prefix}\`official <user>\``)]})
        }

        let abc = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!abc) return message.channel.send({content : `Please Provide me a valid user.`});

        let gRole = await xd.get(`official_${message.guild.id}`);
        if(!gRole || gRole == null){
            return message.channel.send({embeds : [new MessageEmbed().setColor(color).setDescription(`There is no **Official Role** set for **Custom Roles**`)]})
        }

        if(!message.guild.roles.cache.has(gRole)){
            await xd.set(`official_${message.guild.id}`,null);
            return message.channel.send({embeds : [new MessageEmbed().setColor(color).setDescription(`I couldn't find that role in this guild.Probably deleted!`)]})
        }

        message.guild.members.cache.get(abc.id).roles.add(gRole);
        return message.channel.send({embeds : [new MessageEmbed().setColor(color).setDescription(`SuccessFully Added <@&${gRole}> to ${abc}`)]});
    }
}