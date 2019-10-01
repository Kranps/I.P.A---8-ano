.const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
   const a = new Discord.RichEmbed()
        .setTitle(":fire: **Informações** :fire:")
        .setDescription(`:calendar: Atualizado: 30/08/2019:calendar: 
\n
\n:white_small_square: **Convite Discord:** http://bit.ly/StarDustDiscord.
\n:white_small_square: **Twitter da empresa:** @StarDust47.
\n:white_small_square: **Para utilizar o BOT:** Utilize o comando /help.
\n:white_small_square: **Site da empresa:** https://www.StarDust.com.br
\n:white_small_square: **Contato Geral:** SrWhale#5701
\n:white_small_square: **EMAIL**: stardusteam47@gmail.com`)
        .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("Black")

        message.channel.send(a)
}

module.exports.help = {
    name: "info"
}
