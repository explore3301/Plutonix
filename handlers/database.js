//@josh/json databases
const JOSH = require('@joshdb/core')
const JSON = require('@joshdb/json')

//database 1
const db1 = new JOSH({
  name: 'database_1',
  provider: JSON,
  providerOptions: {
    dataDir : "./josh-data/database_1"
  }
})

//database 1
const db2 = new JOSH({
  name: 'database_2',
  provider: JSON,
  providerOptions: {
    dataDir : "./josh-data/database_2"
  }
})
const configs = new JOSH({
  name: 'configs',
  provider: JSON,
  providerOptions: {
    dataDir : "./josh-data/configs"
  }
})

const levels = new JOSH({
  name: 'levels',
  provider: JSON,
  providerOptions: {
    dataDir : "./josh-data/levels"
  }
})

const xd = new JOSH({
  name: 'xd',
  provider: JSON,
  providerOptions: {
    dataDir : "./josh-data/database_xd"
  }
})

const ai = new JOSH({
  name: 'ai',
  provider: JSON,
  providerOptions: {
    dataDir : "./josh-data/ai"
  }
})

const bl = new JOSH({
  name: 'bl',
  provider: JSON,
  providerOptions: {
    dataDir : "./josh-data/bl"
  }
})

const np = new JOSH({
  name: 'np',
  provider: JSON,
  providerOptions: {
    dataDir : "./josh-data/np"
  }
})


module.exports = {
  db1,
  db2,
  configs,
  xd,
  levels,
    ai,
    bl,
    np
}