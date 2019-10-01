const Discord = require('discord.js')

module.exports = { 
    run: (client, message, args) => {

        if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Você não tem permissão para utilizar este comando!")
        message.delete().catch()

        let splitarg = args.join(" ").split(" / ")
        let sugerir = splitarg[0]

        if(!sugerir){
            message.reply("usa ``/sugerir (sugestão).``")
            return
        }

        let anuncioembed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle(`<a:certo:626538515265617931> **Sugestão**`)
        .setDescription(`**Nick:** ${message.author.tag}

         💭 **Sugestão:** **${sugerir}**`)
        .setFooter(`Sugestão enviada por ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp();
      

        message.guild.channels.get('596790295862050817').send(anuncioembed)
      message.reply("Sugestão enviada com sucesso! Acesse o chat <#596790295862050817> para visualizá-la.")
    }
}
