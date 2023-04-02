//importing class bot
const BOT = require("./handlers/client")
//instance of class bot
const client = new BOT()
//importing collection from d.js
const { Collection } = require("discord.js")
//importing token from config.js
const { token } = require("./settings/config")
//making collection of commands
client.commands = new Collection()
//booting client
client.start(token)
//auto-kill for repl.it hosting
setInterval(() => {
  if (!client || !client.user) {
    process.kill(1)
  }
}, 30000);

//exporting instance client
module.exports = client
//snipemap
client.snipes = new Map()
client.on('messageDelete' ,async(message) => {


  
  const fetchedLogs = await message.guild.fetchAuditLogs({type : `MESSAGE_DELETE`}).then(x => x.entries.first());
  const deletionLog = fetchedLogs;


  

  const { executor } = deletionLog;

  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.id,
    image: message.attachments.first() ? message.attachments.first().proxyUrl : null,
    deleted: true,
    deletedBy: executor ? executor.id : null,
    deletedByDisplayName: executor ? executor.username : null
  });
});

