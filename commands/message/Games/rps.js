const { MessageEmbed, MessageButton, MessageActionRow } = require("discord.js")
const simplydjs = require("simply-djs");

module.exports = {
  name: "rockpaperscissor",
  category: "Games",
  aliases: ["rps"],
  usage: "!rockpaperscissor or !rps",
  run: async (client, message, args) => {
    simplydjs.rps(message, {
      embedColor: client.main,
      timeoutEmbedColor: client.color,
      drawEmbedColor: client.main,
      winEmbedColor: client.main,
      embedFooter: "Best Of Luck",
      credit: false,
    });
  }
}