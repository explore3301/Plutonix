const {
  MessageEmbed,
  Modal,
  TextInputComponent,
  MessageActionRow,
  MessageSelectMenu,
MessageButton
} = require("discord.js")

const { o, x, point, arrow, s } = require("../../../settings/emojis.json")

module.exports = {
  name: "help",
  aliases: ['h'],
  edesc: "help",
  description: `need help ? see my all commands`,
  userPermissions: [],
  botPermissions: [],
  category: "Information",
  cooldown: 5,
  docs: "https://www.linkpicture.com/q/a_90526f48b1fa3a1db3424756150c3d6f.gif",


  run: async (client, message, args, prefix) => {

    //timeout embed
 /*   let timeout = new MessageEmbed()
    .setTitle(client.user.username)
.setDescription(`**This Panel Got Expired!!\nPlease Type \`.help\` To Get A New Help Panel**`)

    let alone = new MessageActionRow().addComponents(
      new MessageButton() 
      .setStyle(`SECONDARY`)
      .setLabel('Please Type .help')
      .setDisabled(true)
    )
*/

//buttons for modules
let module = new MessageActionRow().addComponents(
              new MessageButton().setStyle(`SUCCESS`).setCustomId(`mainmod`)
  .setEmoji(`<:nutt_main:1085406283416490056>`)
  .setLabel('Main Module'),
                          new MessageButton().setStyle(`SUCCESS`).setCustomId(`extramod`)
  .setEmoji(`<:nutt_extra:1085406167217483866>`)
.setLabel('Extra Module')
  );
    //suggestion button
const suggest = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('suggest')
      .setLabel('Suggest')
      .setEmoji(`<a:Suggestion:1085497810029395978>`)
      .setStyle('DANGER')
    );

    //back button
    let back = new MessageActionRow().addComponents(
              new MessageButton().setStyle(`DANGER`).setCustomId(`back1`)
  .setLabel('Back')
      );
//main help embed
    let helpem = new MessageEmbed()
          .setDescription(`**__Help Command Overview __**
      
<:nutt_dott:1073440651145904150> **Prefix for this server is** \`.\`
<:nutt_dott:1073440651145904150> **Total Commands:** 
<:nutt_dott:1073440651145904150> **[Invite NuT](https://discord.com/oauth2/authorize?client_id=1047714595705458758&scope=bot+applications.commands&permissions=268823646) | [Support Server](https://discord.gg/nutbot) | [Vote me](https://top.gg/bot/1047714595705458758/vote)**`)
   .addField(`__Commands__`, `> <:nutt_main:1085406283416490056>: **Main Module**\n> <:nutt_extra:1085406167217483866>: **Extra Module**\n\n**Choose Modules Buttons Given Below**`)
    /*.addField(`__Extra Module__`, `**<:nutt_tix:1084444332158890014> : Ticket
<:nutt_setup:1078253738751438928> : Setup
<:nutt_games:1073184664107364466> : Games
<:nutt_fun:1078253487428747406> : Fun**`)*/
    .setTitle(client.user.username)
      .setThumbnail(client.user.displayAvatarURL())
      .setColor('#04FBA0')
    .setTimestamp()
    
    let help = await message.channel.send({embeds: [helpem], components: [module, suggest]})

  
    //embeds for button modules
    let main = new MessageEmbed()
      .setTitle(client.user.username)
      .addField(`__Main Module__`, `>>> **<:nutt_jadu:1078645638440431746> : Ai Commands
<:nutt_modd:1073184608859979846> : Moderation
<:nutt_sets:1073184535698747452> : Custom Roles
<:nutt_util:1073184706692132914> : Utility 
<:nutt_sync:1073435927915008080> : Leveling**`)
      .setThumbnail(client.user.displayAvatarURL())
    /*.setDescription(`__**Main Module**__\n\n**<:nutt_jadu:1078645638440431746> : Ai Commands
<:nutt_modd:1073184608859979846> : Moderation
<:nutt_sets:1073184535698747452> : Custom Roles
<:nutt_util:1073184706692132914> : Utility 
<:nutt_sync:1073435927915008080> : Leveling**`)*/
.setTimestamp()
  .setColor('#04FBA0')

    let extra = new MessageEmbed()
      .setTitle(client.user.username)
    .addField(`__Extra Module__`, `>>> **<:nutt_volh:1073200108910415942> : Voice
<:nutt_games:1073184664107364466> : Games
<:nutt_fun:1078253487428747406> : Fun**`)
      .setThumbnail(client.user.displayAvatarURL())
    .setColor('#04FBA0')
   // .setDescription(`here is your extra module`)


let mai = new MessageActionRow().addComponents(
              new MessageSelectMenu().setCustomId(`he`).setPlaceholder(`Main module Command Menu`).addOptions([
  {
    label: `Home`,
    emoji: `<:nutt_home:1077913914030948392>`,
    value: `mai1`   
  },
              {
                label: `Module Home`,
                emoji: `<:nutt_main:1085406283416490056>`,
                value: `mai2`
              },
                {
               label: `Ai Commands`,
               emoji: `<:nutt_jadu:1078645638440431746>`,
               value: `mm1`
                },
                {
               label: `Moderation`,
               emoji: `<:nutt_modd:1073184608859979846>`,
               value: `mm2`
                },
                {
               label: `Custom Roles`,
               emoji: `<:nutt_sets:1073184535698747452>`,
               value: `mm3`
                },
                {
               label: `Utility`,
               emoji: `<:nutt_util:1073184706692132914>`,
               value: `mm4`
                },
                {
               label: `Leveling`,
               emoji: `<:nutt_sync:1073435927915008080>`,
               value: `mm5`
                } 
                
              ])
  );

        let jhat = new MessageActionRow().addComponents(
              new MessageSelectMenu().setCustomId(`he`).setPlaceholder(`Extra module Command Menu`).addOptions([
  {
    label: `Home`,
    emoji: `<:nutt_home:1077913914030948392>`,
    value: `rohit`   
  },
              {
                label: `Module Home`,
                emoji: `<:nutt_main:1085406283416490056>`,
                value: `rohitop`
              },
              {
                label: `Voice`,
                emoji: `<:nutt_volh:1073200108910415942>`,
                value: `rohit1`
              },
              {
                label: `Games`,
                emoji: `<:nutt_games:1073184664107364466>`,
                value: `rohit2`
              },
              {
                label: `Fun`,
                emoji: `<:nutt_fun:1078253487428747406>`,
                value: `rohit3`
              },
              ])
  );

//main module embeds

    let m1 = new MessageEmbed()
      .setTitle(`__Ai Commands__`)
      .setDescription(`${client.mcommands.filter((cmd) => cmd.category === "Ai").map((cmd) => {return `** \`${cmd.name}\`**`})}`)
    
    let m2 = new MessageEmbed()
      .setTitle(`__Moderation__`)
    .setDescription(`${client.mcommands.filter((cmd) => cmd.category === "Moderation").map((cmd) => {return `** \`${cmd.name}\`**`})}`)
    

    let m3 = new MessageEmbed()
      .setTitle(`__Custom Roles__`)
    .setDescription(`${client.mcommands.filter((cmd) => cmd.category === "Customrole").map((cmd) => {return `** \`${cmd.name}\`**`})}`)

    let m4 = new MessageEmbed()
  
.setTitle(`__Utility__`)   .setDescription(`${client.mcommands.filter((cmd) => cmd.category === "Utility").map((cmd) => {return `** \`${cmd.name}\`**`})}`)

    let m5 = new MessageEmbed()
      .setTitle(`__Leveling__`)
    .setDescription(`${client.mcommands.filter((cmd) => cmd.category === "Levels").map((cmd) => {return `** \`${cmd.name}\`**`})}`)
    

    //extra module embeds 

    let e1 = new MessageEmbed()
     .setTitle(`__Voice Commands__`)
    .setDescription(`${client.mcommands.filter((cmd) => cmd.category === "Voice").map((cmd) => {return `** \`${cmd.name}\`**`})}`)

   let e2 = new MessageEmbed()
    .setTitle(`__Games__`)
  .setDescription(`${client.mcommands.filter((cmd) => cmd.category === "Games").map((cmd) => {return `** \`${cmd.name}\`**`})}`)

    let e3 = new MessageEmbed()
   .setTitle(`__Fun__`)
  .setDescription(`${client.mcommands.filter((cmd) => cmd.category === "Fun").map((cmd) => {return `** \`${cmd.name}\`**`})}`)
    
//collector for interaction
const collector = await help.createMessageComponentCollector({
            filter :(interaction) => {
                if(message.author.id === interaction.user.id) return true;
                else{
                    interaction.reply({content : ` | It's not your session use, \`.help\` to see the commands` , ephemeral : true})
                }
            },
            time : 100000,
            idle : 100000/2
        });
  /*  const suggest = new MessageActionRow()
    .addComponents(
      new MessageButton()
      .setCustomId('suggest')
      .setLabel('Suggest')
      .setStyle('PRIMARY')
    ); */
            

  //interaction update collector usage

     collector.on('collect',async(interaction) => {         

    if(interaction.isButton())
    {
      if (interaction.customId === `mainmod`) 
      {
        return interaction.update({embeds: [main], components: [mai, suggest]})
      }
if (interaction.customId === `extramod`)
{
  return interaction.update({embeds: [extra], components: [jhat, suggest]})
}
      if (interaction.customId === `back1`)
{
  return interaction.update({embeds: [helpem], components: [back]})
} 
      if (interaction.customId === 'suggest')
      {
        await interaction.showModal(
          new Modal()
          .setCustomId('suggestion')
          .setTitle('Drop a suggestion')
          .addComponents(
            new MessageActionRow()
            .addComponents(
              new TextInputComponent()
              .setCustomId('topic')
              .setLabel('What is your suggestion about?')
              .setStyle('SHORT')
              .setRequired(true)
            ),
            new MessageActionRow()
            .addComponents(
              new TextInputComponent()
              .setCustomId('description')
              .setLabel('Description')
              .setPlaceholder('Please elaborate your suggestion')
              .setStyle('PARAGRAPH')
              .setRequired(true)
            )
          )
        );
        await interaction.awaitModalSubmit({
          filter: i => i.customId === 'suggestion',
          time: 5 * 60 * 1000
        })
        .then(async i => {
          const topic = i.fields.getTextInputValue('topic');
          const description = i.fields.getTextInputValue('description');
          client.channels.cache.get('1085406914294321172').send({
            embeds: [
              new MessageEmbed()
              .setColor('DARKBUTNOTBLACK')
              .setTitle('New Suggestion')
              .setAuthor({
                url: `https://discord.com/users/${i.user.id}`,
                name: i.user.tag,
                iconURL: i.user.displayAvatarURL({ dynamic: true }) || i.user.defaultAvatarURL
              })
              .addFields(
                {
                  name: 'Topic',
                  value: `\`\`\`\n${topic}\`\`\``
                },
                {
                  name: 'Description',
                  value: `\`\`\`\n${description}\`\`\``
                }
              )
            ]
          })
          .catch(console.log);
          await i.reply({
            content: 'Your suggestion has been submitted',
            ephemeral: true
          });
          return;
        })
        .catch(console.log);
      }
    }


  if (interaction.isSelectMenu())
           {
     //main module start 👇 
    for(const value of interaction.values)
  

    if (value === `mai1`)
  {
    return interaction.update({embeds: [helpem], components: [module, suggest]})
    }

             for(const value of interaction.values)
  

    if (value === `mai2`)
  {
    return interaction.update({embeds: [main], components: [mai, suggest]})
    }
 
for(const value of interaction.values)
  
if (value === `mm1`)
  {
    return interaction.update({embeds: [m1], components: [mai]})
  }
             for(const value of interaction.values)
               
            if (value === `mm2`)
  {
    return interaction.update({embeds: [m2], components: [mai]})
  } 

for(const value of interaction.values)
               
            if (value === `mm3`)
  {
    return interaction.update({embeds: [m3], components: [mai]})
  }
             for(const value of interaction.values)
               
            if (value === `mm4`)
  {
    return interaction.update({embeds: [m4], components: [mai]})
  } 
             for(const value of interaction.values)
               
            if (value === `mm5`)
  {
    return interaction.update({embeds: [m5], components: [mai]})
  } 
             
//extra module start 👇

for(const value of interaction.values)
  

    if (value === `rohit`)
  {
    return interaction.update({embeds: [helpem], components: [module, suggest]})
    }

for(const value of interaction.values)
  

    if (value === `rohitop`)
  {
    return interaction.update({embeds: [extra], components: [jhat, suggest]})
    }

  for(const value of interaction.values)
    
 if (value === `rohit1`)
  {
    return interaction.update({embeds: [e1], components: [jhat]})
    }

     for(const value of interaction.values)
  if (value === `rohit2`)
  {
    return interaction.update({embeds: [e2], components: [jhat]})
    }

for(const value of interaction.values)
 if (value === `rohit3`)
  {
    return interaction.update({embeds: [e3], components: [jhat]})
    }
           }

     });
    let moduleDisabled = new MessageActionRow().addComponents(
              new MessageButton().setStyle(`SUCCESS`).setCustomId(`mainmod`)
  .setEmoji(`<:nutt_main:1085406283416490056>`)
  .setLabel('Main Module').setDisabled(true),
                          new MessageButton().setStyle(`SUCCESS`).setCustomId(`extramod`)
  .setEmoji(`<:nutt_extra:1085406167217483866>`)
.setLabel('Extra Module').setDisabled(true),
      new MessageButton().setStyle('DANGER').setCustomId(`suggest`)
      .setEmoji(`<a:Suggestion:1085497810029395978>`)
      .setLabel('Suggest').setDisabled(true)
  );
     collector.on('end',async() => {
            if(!help) return;
else help.edit({embeds : [helpem],components : [moduleDisabled] , content : 'The Help menu has expired Run back `.help` to view it back.'})
        });
  }
}
