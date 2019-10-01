const Discord = require ('discord.js')

module.exports = { 
    run: (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não tem permissão para utilizar este comando!")
        message.delete().catch()

      
      
        let splitarg = args.join(" ").split(" ")
        let usuario = splitarg[0]
        
        
      
      if(!usuario){
        message.reply("Você precisa mencinar um usuário para realizar essa ação!")
      }
        
    
      let changelog = new Discord.RichEmbed()
      .setTitle(`<a:certo:625393616755621889> [Changelog - EQUIPE] <a:certo:625393616755621889>`)
      .setDescription(`:white_small_square: ${usuario} não integra mais a equipe.`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
      .setColor(`RANDOM`)
      .setTimestamp();
      
      
      message.guild.channels.get('622439362499575848').send(changelog)
      
      message.reply('Ação realizada com sucesso. O usuário &{usuario} foi demotado.')
   
      
      
     // let Moderador = servidor.roles.get('513729894690193422'),
        //Coordenador = servidor.roles.get('514579882207084564),
        //Ajudante = servidor.roles.get('513730089079406612')
      
     // if(membro.roles.has(Moderador)) return
       //     message.mentions.members.first.addRole(Moderador)
      

      
      
      
    }}
    
      
      module.exports.help = {
    name: "demotar"
}


  