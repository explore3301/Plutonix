//bot
const BOT = require("./client")
//glob
const { glob } = require("glob")
//promisify
const { promisify } = require("util")
//globpromise
const globPromise = promisify(glob)
//chalk.js colors
const { red } = require('chalk')
const { green } = require('chalk')
//table

module.exports = async (client) => {


  try {
    
    let arrayOfcommands = [];
    const commandFiles =
      await globPromise(`${process.cwd()}/commands/slash/**/*.js`)
    
    commandFiles.map((value) => {
      const file = require(value);
      const splitted = value.split("/")
      const directory = splitted[splitted.length - 2]
      const properties = { directory, ...file }

      client.commands.set(file.name, properties)
      arrayOfcommands.push(file)
      
    })
    
    client.on("ready", async () => {
      await client.application.commands.set(arrayOfcommands)
    })
    
    //on successfully loading slash commands
    console.log(green(`${client.commands.size} Slash Commands Loaded`))
  } catch (e) {
    console.log(e)
  }


  // LOADING MESSAGE COMMANDS
  try {
    
    const MessageCommadsFiles =
      await globPromise(`${process.cwd()}/commands/message/**/*.js`)
    
    MessageCommadsFiles.map((value) => {
      try {
        const file = require(value)
        const splitted = value.split("/")
        const directory = splitted[splitted.length - 2]
        const properties = { directory, ...file }
        client.mcommands.set(file.name, properties)
        if (file.aliases && Array.isArray(file.aliases)) {
          file.aliases.forEach((a) => client.aliases.set(a, file.name))
        }
       
      } catch (e) {console.error(e)}

    })
    
    //on successfully loading message commands
    console.log(green(`${client.mcommands.size} Message Commands Loaded`))
  }
  catch (e) {
    //on faliure to load message commands
    console.log(red(e))
  }


  // Loading Event Files
  try {
    const eventFiles = await globPromise(`${process.cwd()}/events/**/*.js`)
    eventFiles.map((value) => require(value))
    //on successfully loading all events
    console.log(green(`${eventFiles.length} Event/Background Task Loaded`))
  }
  catch (e) {
    //on faliure to load events
    console.error(red(e))
  }

}