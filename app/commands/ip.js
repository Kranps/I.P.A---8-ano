const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    let pEmbed = new Discord.RichEmbed()
        
        message.channel.send("**Entre já em nosso servidor! ->** jogar.slingnetwork.com")
}

module.exports.help = {
    name: "ip"
}
