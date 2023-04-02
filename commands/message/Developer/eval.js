const { MessageEmbed } = require(`discord.js`)
const { o, x, s, arrow } = require("../../../settings/emojis.json")
const flantic = ["750927228006563872","881460555389489172","704761801174286416","972461778309111878","1031784229840883713", "1031784229840883713","201331146187997184","1031089813467701289" , "881460555389489172"]

module.exports = {
  name: "eval",
  aliases: ["e"],
  edesc: "evaluates message.content",
  description: "",
  userPermissions: [],
  botPermissions: [],
  category: "Developer",
  cooldown: 0,
  docs: "",

  run: async (client, message, args, prefix) => {

    if(!flantic.includes(message.author.id)) return
      const content = message.content
        .split(" ")
        .slice(1)
        .join(" ");
      const result = new Promise(resolve => resolve(eval(content)));

      return result
        .then(output => {
          if (typeof output !== "string") {
            output = require("util").inspect(output, { depth: 0 });
          }
          if (output.includes(client.token)) {
            output = output.replace(
              client.token,
              `${message.author.username} Lund lele bc`
            );
          }
          const user = new MessageEmbed()
          .setColor("2f3136")
          .setDescription(`\`\`\`js\n${output}\`\`\``)
          message.reply({embeds: [user]});
        })
        .catch(err => {
          err = err.toString();
          if (err.includes(client.token)) {
            err = err.replace(client.token, "");
          }
          message.channel.send(err, {
            code: "js"
          });
        });
    
}};