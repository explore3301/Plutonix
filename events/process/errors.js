//declaring fs and red

const fs = require("fs")
const { red } = require('chalk')

//error handling and logging them in files 

process.on('uncaughtExceptionMonitor', (err, origin) => {});

process.on('uncaughtException', (err, origin) => {
  e = `\nCaught exception: ${err}\n` + `Exception origin: ${origin}`
  fs.appendFileSync('./errorLogs/uncaughtException.txt', e)
  console.error(red(e))
})

process.on('unhandledRejection', (reason, promise) => {
  e = `\nReason: ${reason}\n` + `Promise: ${promise}`
  fs.appendFileSync('./errorLogs/unhandledRejection.txt', e)
  console.error(red(e))
})


process.on('multipleResolves', (type, promise, reason) => {
  e = `\ntype: ${type}\n` + `Promise: ${promise}\n` + `Reason: ${reason}`
  fs.appendFileSync('./errorLogs/multipleResolves.txt', e)
  console.error(red(e))
})