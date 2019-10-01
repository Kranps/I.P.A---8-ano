const Discord = require('discord.js')

module.exports = { 
    run: (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não tem permissão para utilizar este comando!")
        message.delete().catch()

        let splitarg = args.join(" ").split(" . ")
        let anuncio = splitarg[0]


        if(!anuncio){
            message.reply("usa /anunciar (titulo) . (anuncio) burrao '-'``")
            return
        }
      message.channel.send(" @everyone ").then(msg => msg.delete(2000));

        let anuncioembed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setDescription(`<a:sino:626538569552625695> Anúncio <a:sino:626538569552625695>
${anuncio}`)
        .setFooter(`Anuncio feito por ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp();

        message.channel.send(anuncioembed)
      
    }
}
