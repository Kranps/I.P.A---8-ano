const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
  
    name: 'unban',
    description: 'UnBan A User, Then Logs The Action.',
    async execute(message, args, bot) {
      console.log('a')
        if(!message.member.hasPermission("SEND_MESSAGES")) return message.channel.send("No can do pal!")
      console.log('a')

        let bannedMember = await bot.fetchUser(args[0])
            if(!bannedMember) return message.channel.send("Please provide a user id to unban someone!")
      console.log('b')
    
        let reason = args.slice(1).join(" ")
            if(!reason) reason = "No reason given!"
        
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("No can do pal!")
        message.delete()
        try {
            message.guild.unban(bannedMember, {reason: reason})
            message.channel.send(`${bannedMember.tag} has been unbanned from the server!`)
        } catch(e) {
            console.log(e.message)
        }
    
        let Embed = new Discord.RichEmbed()
        .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL)
        .setDescription("~UnBan~")
        .setColor("#e56b00")
        .addField("UnBanned User", `${bannedMember.username} with ID ${bannedMember.id}`)
        .addField("UnBanned By", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("UnBanned In", message.channel)
        .addField("Time", message.createdAt.toLocaleString())
        .addField("Reason", reason);
    
        let unbanChannel = message.guild.channels.find(`name`, "logs");
        if(!unbanChannel) return message.channel.send("Can't Find Logs Channel.");
    
        message.Channel.send(Embed)
    },
};