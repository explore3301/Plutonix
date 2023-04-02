const fs = require("fs")
const { red } = require('chalk')
const { Client, Collection, Intents } = require("discord.js");
const { ClusterClient, getInfo } = require('discord-hybrid-sharding');


class BOT extends Client {
  constructor() {
    super({
      shards: getInfo().SHARD_LIST,
      shardCount: getInfo().TOTAL_SHARDS,
      messageCacheLifetime: 60,
      fetchAllMembers: true,
      messageCacheMaxSize: 10,
      restTimeOffset: 0,
      restWsBridgetimeout: 100,
      allowedMentions: {
        parse: ["roles", "users", "everyone"],
        repliedUser: false,
      },
      partials: ["CHANNEL", "GUILD", "GUILD_MEMBERS", "MESSAGE", "USER"],
      intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES,
        Intents.FLAGS.DIRECT_MESSAGE_TYPING,
        Intents.FLAGS.GUILD_PRESENCES
      ],
    });
    this.cluster = new ClusterClient(this);

    this.right = "#61DC55"
    this.warn = "#FFBB43"
    this.wrong = "#FF7157"
    this.main = "#04FBA0"
    this.danger = "#FF0000"

    this.support = ""
    this.website = ""
    this.footer = "NuT-Ai"
    this.developer = ["972461778309111878","1031089813467701289", "201331146187997184" , "881460555389489172"]

    this.events = new Collection()
    this.cooldowns = new Collection()
    this.mcommands = new Collection()
    this.commands = new Collection()
    this.aliases = new Collection()

    this.mcategories = fs.readdirSync("./commands/message")

    this.sleep = function sleep(time) { return new Promise(resolve => setTimeout(resolve, time * 1000)) }
  }

  start(token) {
    ["handler"].forEach((handler) => {
      require(`./${handler}`)(this)
    })
    this.login(token).catch((e) => { console.error(red(e)) })
  }
}
module.exports = BOT