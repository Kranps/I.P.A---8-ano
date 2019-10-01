const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply("você não tem permissão para usar este comando!")
    let usuario = message.mentions.members.first() || message.guild.members.get(args[0])
    let cargo_nome = message.mentions.roles.first().name || args[1]
    let cargo = message.guild.roles.find(role => role.name === `${cargo_nome}`)
    if(!usuario) return;
    if(!cargo) return;
    
    if(usuario.roles.has(cargo.id)) return message.reply("o membro mencionado já possui esse cargo.")
    usuario.addRole(cargo.id).then(() => {message.channel.send(`Ação realizada com sucesso. Usuário promovido.`)})
  


    message.delete();
  let changelog = new Discord.RichEmbed()
      .setTitle(`<a:certo:626538515265617931> [Changelog - EQUIPE] <a:certo:626538515265617931>`)
      .setDescription(`:white_small_square: ${usuario} promovido à  ${cargo}`)
      .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
      .setColor(`RANDOM`)
      .setTimestamp();
      
      
      message.guild.channels.get('596781835556487169').send(changelog)
}

module.exports.help = {
    name: "promover"
}