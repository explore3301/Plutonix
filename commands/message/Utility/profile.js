const {
  MessageEmbed
} = require("discord.js");

module.exports = {
  name: "profile",
  category: "Utility",
  aliases: ["badge", "badges", "achievement", "pr"],
  cooldown: 5,
  usage: "invite",
  description: "Gives you an Invite link for this Bot",
  run: async (client, message, args, guildData, player, prefix) => {
    
      const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
      
      const bxby = user.id === "972461778309111878" ? true : false;
      let badges = "";
        
     const guild = await client.guilds.fetch("1061297899209756832"); 

      const sus = await guild.members.fetch(user.id).catch((e) => {
        
      if(user) badges = badges;
      else badges = "`No Badge Available`";
      });
      if(bxby === true || user.id === "1078540738352140309") badges = badges + `\n<:nutt_jadu:1078645638440431746> **Head Developer**`;
try{
      
const fyp = sus.roles.cache.has("1076802805974695956");
      if(fyp === true) badges = badges + `\n<:nutt_deve:1073435252602712115> **Developer**`;
   //  const pr = sus.roles.cache.has("959392690863210496");
    //  if(fr === true) badges = badges + `\n:teddy_friend: Friends`;
   //   const help = sus.roles.cache.has("948131708950159370");
   //   if(help === true) badges = badges + `\n:xeta_helper: Helper | Developer`;
const own = sus.roles.cache.has("1078540979008716810");
      if(own === true) badges = badges+`\n<:nutt_owners:1073440721744445450> **Owner**`;
     // const bpart = sus.roles.cache.has("959093515781034016");
   //   if(bpart === true) badges = badges + `\n:xeta_partner: Partner`;
    //  const spons = sus.roles.cache.has("948131710279778336");
   //   if(spons === true) badges = badges + `\n:xeta_sponsor: Sponsor`;

      const han = sus.roles.cache.has("1076802809372102726");
      if(han === true) badges = badges + `\n<:nut_antinuke:1073183113175367742> **Manager**`;

    //  const gbug = sus.roles.cache.has("959094254901280769");
  //if(gbug === true) badges = badges + `\n:xeta_hunter_gold: Bug Hunter Prime`;

      const manager = sus.roles.cache.has("1076802810533908490");
      if(manager === true) badges = badges + `\n<:nutt_modd:1073184608859979846> **Admin**`;

     const aman = sus.roles.cache.has("1078541485017927700");
      if(aman === true) badges = badges + `\n<:Nutt_automod:1073184310837923840> **Moderator**`;

      const hundi = sus.roles.cache.has("1076802811628630026");
      if(hundi === true) badges = badges + `\n<:nutt_setup:1078253738751438928> **Staff**`;

      const supp = sus.roles.cache.has("1076802812610101308");
      if(supp === true) badges = badges + `\n<:nut_vip:1078993093321310208> **Vip**`;

      const fr = sus.roles.cache.has("1078542433182294126");
      if(fr === true) badges = badges + `\n<:nutt_sup:1073435792543854682> **Friends**`;

  const mia = sus.roles.cache.has("1078542655983718581");
      if(mia === true) badges = badges + `\n<:nutt_server:1073434827992342558> **Dank Voter**`;

    const alo = sus.roles.cache.has("1076802821388783616");
      if(alo === true) badges = badges + `\n<:nutt_sets:1073184535698747452> **No Prefix**`;

  const xx = sus.roles.cache.has("1076802815818739803");
      if(xx === true) badges = badges + `\n<:nutt_users:1073435531058356264> **User**`;





}catch(err){
if(badges) {
badges = "";
badges = badges;
}
else if(badges === "") badges = "`No Badge Available`";
}


      const pr = new MessageEmbed()
.setAuthor(`${user.tag}'s Profile.`, client.user.displayAvatarURL({dynamic: true})) 
.setThumbnail(client.user.displayAvatarURL({dynamic: true}))
//.setTitle(`${user.username}'s Profile`)
.setColor(client.main)
.setTimestamp()
.setDescription(`**__Badges__** <a:nutt_badges:1078622881455542282>
${badges ? badges : "`No Badge Available`"}`)
//.setTimestamp();
      message.channel.send({embeds: [pr]});
      
    }
  };