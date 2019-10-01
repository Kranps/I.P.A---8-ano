const Discord = require('discord.js')

module.exports = { 
    run: (client, message, args) => {

        if(!message.member.hasPermission("SEND_MESSAGES")) return message.reply("Por enquanto so o Paulo pode anunciar '-'")
        message.delete().catch()

        let splitarg = args.join(" ").split(" / ")
        let Nome = splitarg[0]
        let Sigla = splitarg[1]
        let Lider = splitarg[2]
        console.log(`a`)


        if(!Nome){
        return    message.reply("usa /participar (Nome do clan) / Sigla do Clan / Líder do Clan.")
        }
      if(!Sigla){
            return message.reply("usa /participar (Nome do clan) / Sigla do Clan / Líder do Clan.")
        }
      if(!Lider){
            return message.reply("usa /participar (Nome do clan) / Sigla do Clan / Líder do Clan.")
        }
      console.log(`bc`)
        let anuncioembed = new Discord.RichEmbed()
        .setTitle("🛏 **Campeonato de BedWars** 🛏")
        .setDescription(`**Usuário participando: ${message.author.tag}
 
 Nome do Clan: ${Nome}

 Sigla do Clan: ${Sigla}

 Líder do Clan: ${Lider}** `)
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor(`RANDOM`)
        .setTimestamp();
     

        message.guild.channels.get('625385859608477717').send(anuncioembed)
      
    }
}
