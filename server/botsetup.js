const RiveScript = require('rivescript')

var bot = new RiveScript()

bot.loadFile("./brain.rive").then(() => {

    bot.sortReplies()
    console.log("Bot is ready!")

}).catch(() => { console.log("OH NO") })

module.exports = {

    bot,

}