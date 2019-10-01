const Discord = require('discord.js')

module.exports = { 
    run: (client, message, args) => {

        if(!message.member.hasPermission("SEND_TTS_MESSAGES")) return message.reply("Você não tem permissão para utilizar este comando! ")
        message.delete().catch()

        let splitarg = args.join(" ").split(" / ")
        let video = splitarg[0]

        if(!video){
            message.reply("usa ``/divulgar (video).``")
            return
        }

        let anuncioembed = new Discord.RichEmbed()
        .setColor("#FF9900")
        .setTitle(`:projector:  **Novo vídeo no servidor!** :projector: `)
        .setDescription(`Olá, o Youtuber** ${message.author.tag} **enviou um vídeo no servidor!

        Para acessar o vídeo, basta: [clicar aqui](${video}) `)
        .setFooter(` ${message.author.tag}`, message.author.displayAvatarURL)
        .setTimestamp();

        message.guild.channels.get('554065830573375488').send(anuncioembed)
      message.reply("Vídeo enviado com sucesso! Acesse o chat <#554065830573375488> para visualizá-lo.")
    }
}
