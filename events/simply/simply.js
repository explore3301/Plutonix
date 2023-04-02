const client = require("../../index")
const {mongo} = require("../../settings/config")
const simplydjs = require("simply-djs")


client.on(`ready`, () => {
  simplydjs.connect(mongo)
})

let Btn = [
  "create_ticket",
  "close_ticket",
  "open_ticket",
  "tr_ticket", "delete_ticket", "yea_del", "dont_del"]
let ttt = [
  "accept",
  "decline",
  "a1", "a2", "a3",
  "b1", "b2", "b3",
  "c1", "c2", "c3",
  "rock", "paper", "scissors", "deny-ttt", "accept-ttt"]
let cal = [
  "cal-Clear", "cal-7", "cal-4",
  "cal-1", "cal-.", "cal-(", "cal-8",
  "cal-5", "cal-2", "cal-0", "cal-)",
  "cal-9", "cal-6", "cal-3", "cal-00",
  "cal-=", "cal-+", "cal--", "cal-*",
  "cal-/", "cal-⌫", "cal-%", "cal-^", "cal-π", "cal-Delete"]

client.on("interactionCreate", async (interaction) => {
  if (!interaction.guild || interaction.user.bot) return

  if (interaction.isButton()) {

    // simply-djs ticket handling

    if (Btn.includes(interaction.customId)) {
      return simplydjs.manageBtn(interaction, {})
    }

    if (ttt.includes(interaction.customId)) {
      //return;
    }
    if (cal.includes(interaction.customId)) {
      return simplydjs.manageBtn(interaction, {})
    }
  }
})