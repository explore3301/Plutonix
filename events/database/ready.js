const { db1 , db2 } = require("../../handlers/database")

async function ready()
  {
db1.set(`test_value`,1)
db2.set(`test_value`,1)

db1.defer.then(async () => {
  console.log(`Database 1 is ready`);
})

db2.defer.then(async () => {
  console.log(`Database 2 is ready`);
})
  }

ready()