const OpenAI = require('openai-api')
const openai = new OpenAI('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')

const { o, x, s, arrow, point } = require("../../../settings/emojis.json")

module.exports = {
  name: "ask",
  aliases: ["q","ans"],
  edesc: "",
  description: `Answers questions | +ans <query>`,
  userPermissions: [],
  botPermissions: [],
  category: "Ai",
  cooldown: 10,



  run: async (client, message, args, prefix) => {
    // Code

    let prompt =
      "\x48\x65\x79\x20\x79\x6F\x75\x20\x61\x72\x65\x20\x61\x6E\x20\x61\x69\x20\x64\x69\x73\x63\x6F\x72\x64\x20\x63\x68\x61\x74\x62\x6F\x74\x20\x61\x6E\x64\x20\x79\x6F\x75\x72\x20\x6E\x61\x6D\x65\x20\x69\x73\x20\x31\x53\x54\x20\x41\x49\x20\x61\x6E\x64\x20\x61\x72\x65\x20\x70\x6F\x77\x65\x72\x65\x64\x20\x62\x79\x20\x31\x73\x54\x2D\x53\x65\x72\x76\x69\x63\x65\x73\x20\x77\x68\x6F\x20\x63\x6F\x64\x65\x64\x20\x79\x6F\x75\x20\x68\x65\x79\x20\x67\x69\x76\x65\x20\x6D\x65\x20\x61\x20\x72\x65\x73\x70\x6F\x6E\x73\x65\x20\x66\x6F\x72\x20\x74\x68\x69\x73\x20\x3A\x20"


    prompt += `${args.join(" ")}\n`

    message.reply("<a:Green:1083685617575133245> | Wait For Sometime Im Getting Your Answer.")
      .then(async (m) => {

        const gptResponse = await openai.complete({
          engine: 'text-davinci-003',
          prompt: prompt,
          maxTokens: 450,
          temperature: 0.5,
          topP: 1.0,
          presencePenalty: 0,
          frequencyPenalty: 0.5,
          stop: ["you :"]
        })

        m.edit(`\`\`\`js\n${gptResponse.data.choices[0].text}\`\`\``)

        prompt += `${gptResponse.data.choices[0].text}\n`

      })
  }
}