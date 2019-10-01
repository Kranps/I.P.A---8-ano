const Discord = require ('discord.js')

module.exports = { 
    run: (client, message, args) => {
      if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply("Você não tem permissão para utilizar este comando!")
        message.delete().catch()

      
      
        let splitarg = args.join(" ").split(" ")
        let usuario = splitarg[0]
        let cargo = splitarg[1]
        
        if(!cargo){
          message.reply("Você precisa mencionar um usuário e um cargo para realizar essa ação!")
          return
        }
      
      if(!usuario){
        message.reply("Você precisa mencinar um usuário e umcargo para realizar essa ação!")
      }
        
    
      let changelog = new Discord.RichEmbed()
      .setTitle(`:cop: [Changelog - EQUIPE] :cop:`)
      .setDescription(`:white_small_square: ${usuario} rebaixado à  ${cargo}`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
      .setTimestamp();
      
      
      message.guild.channels.get('513726133414526976').send(changelog)
      message.reply("Ação realizada com sucesso. Usuário rebaixado.")
    
      
     // let Moderador = servidor.roles.get('513729894690193422'),
        //Coordenador = servidor.roles.get('514579882207084564),
        //Ajudante = servidor.roles.get('513730089079406612')
      
     // if(membro.roles.has(Moderador)) return
       //     message.mentions.members.first.addRole(Moderador)
      

      
      
      
    }}
    
      
      module.exports.help = {
    name: "rebaixar"
}

  