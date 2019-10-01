const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    let anuncioembed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setDescription(`Status do BOT

⌛  ** BOT IS NOW ONLINE! ⌛ **`)
        .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp();

        message.channel.send(anuncioembed)
}

module.exports.help = {
    name: "status"
}
