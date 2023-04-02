const { message, client, MessageEmbed,MessageActionRow,MessageButton } = require("discord.js");
const { xd } = require('../../../handlers/database.js')

module.exports = {
  name: "setup",
  aliases: ['set', 'setuprole'],
  category: 'Customrole',
  run: async (client, message, args, prefix) => {

    DARK_BUT_NOT_BLACK = client.main

const list = args[0];

    if(message.member.permissions.has("ADMINISTRATOR")){
} else {
        const embed = new MessageEmbed()
        .setDescription("You are not allowed to use these command !")
          .setTimestamp()
        .setColor(DARK_BUT_NOT_BLACK)
        return message.channel.send({embeds: [embed]})
    }

if(!list){
    const embed = new MessageEmbed()
    .setAuthor({name: `${message.author.tag}`, iconURL: message.author.avatarURL({dynamic: true})})
      .setTitle(`Custom Role Setup Panel.`)
    .addFields(
       /* { name: `<a:crystal:1077585246251401236> .setup`, value: '`Get proper guild about custom role.`', inline: false },*/
        { name: `<a:crystal:1077585246251401236> **.setup reqrole <role>**`, value: '`Setup require role through which a particular user can assign custom roles to users.`', inline: false },
        { name: `<a:crystal:1077585246251401236> **Setup Customrole**`, value: '**Example:** `.setup <Role Name> [@Role_Mention]`', inline: false },
     /*   { name: `<a:crystal:1077585246251401236> .setup friend`, value: '`.setup <friend role>`', inline: false },
        { name: `<a:crystal:1077585246251401236> .setup guest`, value: '`.setup <guestrole>`', inline: false },
        { name: `<a:crystal:1077585246251401236> .setup vip`, value: '`.setup <viprole>`', inline: false },
        { name: `<a:crystal:1077585246251401236> .setup girl`, value: '`.setup <girlrole>`', inline: false },*/
        { name: `<a:crystal:1077585246251401236> **.setup config**`, value: '`Get your setup configuration.`', inline: false },
        { name: `<a:crystal:1077585246251401236> **Setup Reset**`, value: `**To Reset All:** \`.setup reset\`\n**To Reset Category:** \`.setup remove<category name>\``, inline: false },
        
     /*   { name: `<a:crystal:1077585246251401236> **.setup reset**`, value: '`Delete your hole custom role setup from our database`', inline: false },*/
        
    )
    .setColor(DARK_BUT_NOT_BLACK)
          .setFooter("Thanks For Using NuT", client.user.displayAvatarURL())
  //.setTimestamp()
    message.channel.send({embeds: [embed]})
}

if(list === 'reqrole'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription(`You have to provide the role !\n\n\`.setup reqrole <role>\``)
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('It May Be Risky To Add A Role With \`ADMINISTRATOR\` Permission(s)!! Try With Any Other Role.')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    const findData = await xd.get(`reqrole_${message.guild.id}`) || "no"
await xd.set(`reqrole_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Required Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}

//official 
if(list === 'official'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await
xd.set(`official_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Official Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}
    
//staff
    if(list == 'staff'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await
xd.set(`staff_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as staff Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}
//admin
    if(list == 'admin'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await
xd.set(`admin_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Admin Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}

    
//mod
if(list === 'mod'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await
xd.set(`mod_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Mod Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}

//girlmod
    if(list === 'girlmod'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await
xd.set(`girlmod_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Girlmod Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}
    //girl admin

    if(list === 'girladmin'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await
xd.set(`girladmin_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Girl Admin Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}
    //girl Vip
    if(list === 'girlvip'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await
xd.set(`girlvip_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Girl Vip Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}
    
    
//friend 
if(list === 'friend'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await
xd.set(`friend_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Friend Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}

//
if(list === 'guest'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
  
await
xd.set(`guest_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Guest Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}

if(list === 'vip'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }
await xd.set(`vip_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Vip Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}

//
if(list === 'girl'){
    const role = message.mentions.roles.first() ||  message.guild.roles.cache.get(args[1])
    if(!role){
        const embed  = new MessageEmbed()
        .setDescription('You have to provide the role !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

    if(role.permissions.has("ADMINISTRATOR") === true){
        const embed  = new MessageEmbed()
        .setDescription('These Role Has ADMINISTRATOR , Try Again Later !')
        .setColor(DARK_BUT_NOT_BLACK)
        return  message.reply({embeds: [embed]})
    }

await xd.set(`girl_${message.guild.id}`,role.id)
const embed  = new MessageEmbed()
.setDescription(`Successfully added ${role} as Girl Role.`)
.setColor(DARK_BUT_NOT_BLACK)
message.channel.send({embeds: [embed]})
}

//

if(list === 'config'){
    
    let req = await 
xd.get(`reqrole_${message.guild.id}`) || "na"
    let official = await xd.get(`official_${message.guild.id}`)  || "na"
    let staff = await xd.get(`staff_${message.guild.id}`)  || "na"
  let mod = await xd.get(`mod_${message.guild.id}`)  || "na"
  let girlmod = await xd.get(`girlmod_${message.guild.id}`)  || "na"
  let girladmin = await xd.get(`girladmin_${message.guild.id}`)  || "na"
    let girlvip = await xd.get(`girlvip_${message.guild.id}`)  || "na"
  let admin = await xd.get(`admin_${message.guild.id}`)  || "na"
    let frd = await xd.get(`friend_${message.guild.id}`) || "na"
    let guest = await 
xd.get(`guest_${message.guild.id}`) || "na"
    let girl = await xd.get(`girl_${message.guild.id}`) || "na"
    let vip = await xd.get(`vip_${message.guild.id}`) || "na"

   
if(req === 'na'){
    req = 'Nothing To Show'
} else {
    req = `<@&${req}>`

}
if(official === 'na'){
    official = 'Nothing To Show'
} else {
    official = `<@&${official}>`

}
  if(staff === 'na'){
    staff = 'Nothing To Show'
} else {
    staff = `<@&${staff}>`

}
  if(mod === 'na'){
    mod = 'Nothing To Show'
} else {
    mod = `<@&${mod}>`

}
  if(girlmod === 'na'){
    girlmod = 'Nothing To Show'
} else {
    girlmod = `<@&${girlmod}>`

}
  if(girladmin === 'na'){
    girladmin = 'Nothing To Show'
} else {
    girladmin = `<@&${girladmin}>`

}
  if(girlvip === 'na'){
    girlvip = 'Nothing To Show'
} else {
    girlvip = `<@&${girlvip}>`

}

  if(admin === 'na'){
    admin = 'Nothing To Show'
} else {
    admin = `<@&${admin}>`

}
if(frd === 'na'){
    frd = 'Nothing To Show'
} else {
    frd = `<@&${frd}>`

}
if(guest === 'na'){
    guest = 'Nothing To Show'
} else {
    guest = `<@&${guest}>`

}
if(vip === 'na'){
    vip = 'Nothing To Show'
} else {
    vip = `<@&${vip}>`

}
if(girl === 'na'){
    girl = 'Nothing To Show'
} else {
    girl = `<@&${girl}>`

}
    const embed = new MessageEmbed()
        .setColor(DARK_BUT_NOT_BLACK)
        .setTitle('Custom Role List')
        .addFields(
            { name: 'Required Role', value: `${req}`, inline: true },
            { name: 'Official Role', value: `${official}`, inline: true },
          
          { name: 'Staff Role', value: `${staff}`, inline: true },
          { name: 'Mod Role', value: `${mod}`, inline: true },
          { name: 'Girlmod Role', value: `${girlmod}`, inline: true },
{ name: 'Girladmin Role', value: `${girladmin}`, inline: true },
          { name: 'Girlvip Role', value: `${girlvip}`, inline: true },

          { name: 'Admin Role', value: `${admin}`, inline: true },
          
            { name: 'Friend Role', value: `${frd}`, inline: true },
            { name: 'Guest Role', value: `${guest}`, inline: true },
            { name: 'Vip Role', value: `${vip}`, inline: true },
            { name: 'Girl Role', value: `${girl}`, inline: true },

        )
    
       message.channel.send({embeds: [embed]})

    
}
/*
if(list === 'reset'){
    await xd.delete(`reqrole_${message.guild.id}`) 
   await xd.delete(`official_${message.guild.id}`) 
  await xd.delete(`staff_${message.guild.id}`) 
  await xd.delete(`mod_${message.guild.id}`) 
  await xd.delete(`admin_${message.guild.id}`) 
    await xd.delete(`friend_${message.guild.id}`) 
     await xd.delete(`guest_${message.guild.id}`) 
   await xd.delete(`girl_${message.guild.id}`)
    await xd.delete(`vip_${message.guild.id}`) 

    const embed = new MessageEmbed()
    .setColor(DARK_BUT_NOT_BLACK)
.setDescription("All the setuped custom role has been reset")
message.channel.send({embeds: [embed]})
}*/
    //if(list === 'rreqrole'){
    //await //xd.delete(`reqrole_${message.guild.id}`) 
     // const embed1 = new MessageEmbed()
   // .setColor(DARK_BUT_NOT_BLACK)
//.setDescription("Reqrole has been reset successfully.")
//message.channel.send({embeds: [embed1]})
     // }
  }}