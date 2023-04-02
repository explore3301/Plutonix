//import package dotenv
require("dotenv").config()

let token = process.env.TOKEN || ""
let PREFIX = process.env.PREFIX || "."
let mongo = "mongodb+srv://punitop:Cz7NZVWJjgvD3c2n@test.e08vor3.mongodb.net/?retryWrites=true&w=majority" || process.env.MONGO
let noprefix = ['1076802821388783616', '1061947882682462249' , '881460555389489172']

//go to handlers -> client.js -> fill in other required details

module.exports = {
  token,
  PREFIX,
  mongo,
    noprefix
};