const { MessageEmbed } = require(`discord.js`);
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

module.exports = {
  name: "hack",
  aliases: [],
  edesc:"hack @user",
  description: `simultes hacking`,
  userPermissions: [],
  botPermissions: [],
  category: "Games",
  cooldown: 5,
  


  run: async (client, message, args, prefix) => {
    // Code
    color = client.main


    let member = message.mentions.members.first()
    if(!member) return message.reply("Mention someone to hack.")
    message.reply({embeds:[new MessageEmbed()
                           .setColor(color)
                           
                      .setDescription("**[5%]** Finding discord login... [2fa bypassed]")]}).then(m => {
        setTimeout(() => {
            m.edit({embeds:[new MessageEmbed() .setColor(color)  .setDescription("**[15%]** Discord login found, finding ip..")]}).then(m2 => {
                setTimeout(() => {
                    m2.edit({embeds:[new MessageEmbed() .setColor(color) .setDescription("**[30%]** IP FOUND! looking for email and password..")]}).then(m3 => {
                        setTimeout(() => {
                            m3.edit({embeds:[new MessageEmbed() .setColor(color) .setDescription(`**[50%]** DONE! Email: ${member}@gmail.com｜Password: XuIsjgi9cg_`)]}).then(m4 => {
                                setTimeout(() => {
                                    m4.edit({embeds:[new MessageEmbed() .setColor(color) .setDescription("**[75%]** Installing Alone virus..")]}).then(m5 => {
                                        setTimeout(() => {
                                            m5.edit({embeds:[new MessageEmbed() .setColor(color) .setDescription(`**[100%]** Done hacking ${member}`)]}).then(m6 => {
                                                setTimeout(() => {
                                                    m6.edit({embeds:[new MessageEmbed() .setColor(color) .setDescription(`Sucessfully hacked ${member}`)]})
                                                }, 2100);
                                            })
                                        }, 4000);
                                    })
                                }, 1800);
                            })
                        }, 3100);
                    })
                }, 3200);
            })
        }, 2100);
    })


  }

}