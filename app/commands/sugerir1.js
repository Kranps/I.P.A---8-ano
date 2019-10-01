const Discord = require('discord.js')

module.exports = { 
    run: (client, message, args) => {

        if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Desculpe, mas você não tem BALEIAS SUFICIENTES SEU GORDO '-' ")
        message.delete().catch()

        let splitarg = args.join(" ").split(" / ")
        let sugerir = splitarg[0]

        if(!sugerir){
            message.reply("usa /sugerir (titulo) **/** (sugestão) burrao '-'``")
            return
        }

        let anuncioembed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle(`:thought_balloon: **Sugestão**`)
        .setDescription(`**Nick:** ${message.author.tag}
        **Sugestão:** **${sugerir}**`)
        .setFooter(`Sugestão enviada por ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp();

        message.channel.send(anuncioembed)
    }
}