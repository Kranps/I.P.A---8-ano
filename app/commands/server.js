.const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;
    var request = require('request');
    var mcIP = 'jogar.redehorizon.com.br'; // Your MC server IP or hostname address
    var mcPort = 25565; // Your MC server port (25565 is the default)

    var url = 'http://mcapi.us/server/status?ip=' + mcIP + '&port=' + mcPort;
    request(url, function(err, response, body) {
        if(err) {
            console.log(err);
            return message.reply('Erro ao pegar a sua mae');
        }
        body = JSON.parse(body);
        var status = '*Tem que abrir o servidor seu burro*';
        if(body.online) {
            status = '**ONLINE!**  -  ';
            if(body.players.now) {
                status += '' + body.players.now + ' players estão jogando no servidor!!';
            } else {
                status += '** mas não tem ninguém jogando. :smile:**';
            }
        }
        message.channel.send(status);
    });
}

module.exports.help = {
    name: "server"
}