const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.reply("você não tem permissão para usar este comando!")
    let usuario = message.mentions.members.first() || message.guild.members.get(args[0])
    let cargo_nome = message.mentions.roles.first().name || args[1]
    if(!usuario) return message.reply("Mencione alguem mdsss");
    if(!cargo_nome) return message.replu("mencione alguem mdss")
    let cargo = message.guild.roles.find(role => role.name === `${cargo_nome}`)
    

    usuario.removeRole(cargo.id).then(() => {message.channel.send(`${usuario} teve o cargo: <@&${cargo.id}> removido!`)})

    message.delete();
};

module.exports.help = {
    name: "removertag"
}