const Discord = require('discord.js');
const client = new Discord.Client();

module.exports.run = (client, message, args) => {
  
  let usuario = message.mentions.members.first() || message.guild.members.get(args[0])
  if(!usuario) return message.reply("Você deve mencionar um usuário!")
    
  
  
  
  let pEmbed = new Discord.RichEmbed()
  .setTitle(`Avatar do ${usuario.user.tag}`)
  .setThumbnail(usuario.user.avatarURL)
  .setColor('BLUE')
  message.channel.send(pEmbed)
  
}