const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('KICK_MEMBERS')) return message.reply("Você não tem **permissão** suficiente !")
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Você deve mencionar um usuário!")
    if(!member.kickable)
      return message.reply("Desculpe, mas eu não posso kickar este usuário")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "Tem que colocar o motivo seu burro gordooooooooooo"
    await member.kick(reason)
      .catch(error => message.reply(`Mano eu ${message.author} não consegui kickar o membro por causa  do: ${error}`))

      message.channel.send(`${message.author}`)

      let pEmbed = new Discord.RichEmbed()
          .setTitle(":hammer: Kick")
          .addField("Membro Kickado:", `${member.user.tag}`)
          .addField("Kickado por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("RANDOM")
          .setTimestamp()

          message.guild.channels.get('596765113248251906').send(pEmbed)
          
}

module.exports.help = {
    name: "kick"
}
