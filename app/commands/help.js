const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;

    message.channel.send(`${message.author}`)
   const a = new Discord.RichEmbed()
        .setTitle(":fire: **Comandos** :fire:")
        .setDescription(` :page_facing_up:Lista de Comandos:page_facing_up:
\n
\n:black_square_button: ban: Bane um usuário permanentemente do servidor.
\n:white_small_square: USO: /ban (usuário) (motivo).

\n:black_square_button: kick: Bane um usuário do servidor, mas não permanentemente. O usuário "kickado" pode entrar novamente caso seja convidado.
\n:white_small_square: USO: /kick (usuário) (motivo).

\n:black_square_button: anunciar: Cria um anúncio (óbvio).
\n:white_small_square: USO: /anunciar (anúncio).

\n:black_square_button: clear: Limpa uma certa quantidade de mensagens.
\n:white_small_square: USO: /clear (quantidadeDeMensagens)

\n:black_square_button: ping: Mostra o seu ping.
\n:white_small_square: USO: /ping

   \n:black_square_button: Falar: Fala o que o usuário falou.
   \n:white_small_square: USO: /falar
\n :black_square_button: sugerir: Envia uma sugestão no canal <#619921546957553704>
\n :white_small_square: USO: /sugerir (sugestão) `)
        .setFooter(`Solicitado por ${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("#0000FF")
   let botAvatar = client.user.displayAvatarURL
   let Moderação
   let Administração
   let Diversão

        message.channel.send(a)
}

module.exports.help = {
    name: "help3"
}
