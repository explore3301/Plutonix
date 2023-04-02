//client
const client = require("../../index")
//discord.js
const Discord = require(`discord.js`)
//chalk.js colors
const {cyanBright} = require('chalk')
const {yellowBright} = require('chalk')
//importing status function
const { status } = require("../../handlers/functions")
const ms = require("ms")


//event when the client gets ready | logged in
client.on("ready", async () => {

//console logging
  console.log(yellowBright(`Connected to ${client.guilds.cache.size}`))
  console.log(cyanBright(`Connected as: ${client.user.username}`))
  up = ms(ms(Math.round(process.uptime() - (client.uptime / 1000)) + ' seconds'))
	console.log(`Your IDE took ${up} to load and connect to the bot.`)
})

//setting status
client.on("ready", () => 
{
  setInterval(status, 3000)
})
