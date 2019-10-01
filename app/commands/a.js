const Discord = require ('discord.js')

module.exports.run = (client, message, args) => {
  
  if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.reply("você não tem permissão para usar este comando!")
  console.log('a')
        message.guild.fetchBans().then(bans => {
            bans.forEach(user => {
                console.log(user.username + '#' + user.tag);
                user.send('MESSAGE / INVITE LINK');
                message.guild.unban(user);
              
            });
        });
  console.log('b')
    }
console.log('b')

module.exports.help = {
    name: "a"
}

 
  
  
  
  
