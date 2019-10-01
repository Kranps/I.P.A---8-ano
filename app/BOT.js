const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client()
client.prefix = config.prefix;


client.on('guildMemberAdd', member => {

    let canal = member.guild.channels.find(c => c.name == '🚪┃bem-vindo ');
    if (!canal) return;
  
    var embed = new Discord.RichEmbed()
    .setColor('#ff0080')
    .setDescription(`O **${member}**, Entrou no servidor. Seja Bem-vindo(a) a Rede testando.`)
    .addField('Você é o membro de numero:', member.guild.memberCount)
    .setThumbnail(member.user.avatarURL)
    .setTimestamp()
    .setFooter(`Novo membro no Área.`)
    canal.send({embed : embed})

  })

client.on("guildMemberAdd", async member => {
  
  let usuario
  let pEmbed = new Discord.RichEmbed()
  .setTitle(`<a:certo:626538515265617931> Temos um novo membro no servidor! <a:certo:626538515265617931>`) 
  .setDescription(`Olá, **${member.user.username}**, seja bem-vindo ao ${member.guild.name}

**Informações**
Caso precise de ajuda, você pode solicitar suporte em nossas salas especiais para isso. Temos uma equipe ótima para retirar todas suas dúvidas. 
Caso deseje utilizar algum comando, meu prefix é **"/"**, e utilize o comando /help.`)
  .addField('Você é o membro de numero:', member.guild.memberCount)
  .setThumbnail(member.user.avatarURL)
  .setFooter(`Novo membro no Área.`)
  client.channels.get('596147571316228096').send(pEmbed)
  
  
});

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("Me deixa em paz seu gordo. Meu prefixo é `/` '-'. agora me deixaaaaaaaa")}
    if(!message.content.startsWith(config.prefix)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})


client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "627621297471619092") return

    let servidor = client.guilds.get("553763523470163978")
    let membro = servidor.members.get(dados.d.user_id)

    let Captcha = servidor.roles.get('553763907047522314'),
        Captcha1 = servidor.roles.get('627621014116892712')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "626538515265617931"){
            if(membro.roles.has(Captcha)) return
            membro.addRole(Captcha)
            membro.removeRole(Captcha1)
        }
        }

    if(dados.t === "MESSAGE_REACTION_REMOVE"){
        if(dados.d.emoji.id === "626538515265617931"){
            if(membro.roles.has(Captcha)) return
            membro.removeRole(Captcha)
        
        
        }}

})




client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)

    let messages = [`Assistindo ${client.users.size} pessoas`,
                    `Criado por SrWHale#0001`]

    setInterval(() => {
        let randomMessages = Math.floor(Math.random() * (messages.length - 1) + 1)
        client.user.setActivity(messages[randomMessages])
    }, 10000)

    //0 = Jogando
    //1 = Transmitindo
    //2 = Ouvindo
    //3 = Assistindo
  
})


client.login(process.env.TOKEN);