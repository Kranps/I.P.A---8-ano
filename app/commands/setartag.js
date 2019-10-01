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
    usuario.addRole(cargo.id).then(() => {message.channel.send(`O usuário ${message.author.tag} setou ${usuario} como <@&${cargo.id}>!`)})

    message.delete();
};
    

module.exports.help = {
    name: "setartag"
}