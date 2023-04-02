const { MessageEmbed } = require(`discord.js`);
//const Settings = require('../../core/settings.js');
const { xd } = require('../../../handlers/database.js')

module.exports = {
    name : "removegirladmin",
    aliases : ["rgirladmin"],
    category : "Customrole",
    run: async (client, message, args, prefix) => {

      color = client.main 
        //let prefix = await client.db1.get(`prefix_${message.guild.id}`);
       // if(!prefix) prefix = Settings.bot.info.prefix;


        let reqRole = await xd.get(`reqrole_${message.guild.id}`);
        if(!reqRole || reqRole == null){
            return message.channel.send({embeds : [new MessageEmbed().setColor(color).setDescription(`There is no **Required Role** for **Custom Roles**`)]})
        }

        if(!message.member.permissions.has("ADMINISTRATOR") && message.author.id != message.guild.ownerId  && !message.member.roles.cache.has(reqRole)){ return message.channel.send({embeds : [new MessageEmbed().setColor(color).setDescription(`You are not allowed to run these command.`)]}) }

       await xd.delete(`girladmin_${message.guild.id}`)
        const embed = new MessageEmbed()
    .setColor(color)
.setDescription("All the setuped custom role has been reset")
message.channel.send({embeds: [embed]})



    }
}