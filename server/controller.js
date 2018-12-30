const bot = require("./botsetup").bot

module.exports = {

    getResponse: (req, res, next) => {

        user = req.body.user
        message = req.body.message

        bot.reply(user, message, this).then(reply => {
            res.status(200).send(reply)
        })

    },

}