const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;
    message.delete().catch()

    let pEmbed = new Discord.RichEmbed()
        .setTitle(":ping_pong:Pong")
        .addField(":robot:BOT: ", Math.floor(clientping) + "ms")
        .addField("<:regedit:626542333235691521> PING: ", Math.floor(client.ping) + "ms")
        .setFooter(`Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp();

        message.channel.send(pEmbed)
}

module.exports.help = {
    name: "ping"
}
