const Discord = require('discord.js')

module.exports = { 
    run: (client, message, args) => {

        if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Você não tem permissão para utilizar este comando!")
        message.delete().catch()

        let splitarg = args.join(" ").split(" . ")
        let falar = splitarg[0]

        if(!falar){
            message.reply("usa /falar (mensagem)")
            return
        }

        message.channel.send(` **${falar}**`)
      
    }
}
