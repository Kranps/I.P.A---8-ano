const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
  client.on('raw', async dados => {
    if(dados.t !== "MESSAGE_REACTION_ADD" && dados.t !== "MESSAGE_REACTION_REMOVE") return
    if(dados.d.message_id != "622577737235824720") return

    let servidor = client.guilds.get("513720354347286538")
    let membro = servidor.members.get(dados.d.user_id)

    let Captcha = servidor.roles.get('513745352659173385'),
        LOL = servidor.roles.get('513730089079406612'),
        Yu_Gi_OH = servidor.roles.get('513729894690193422')

    if(dados.t === "MESSAGE_REACTION_ADD"){
        if(dados.d.emoji.id === "🆎"){
            if(membro.roles.has(Captcha)) return
            membro.addRole(Captcha)
        }else if(dados.d.emoji.id === "🔝"){
            if(membro.roles.has(LOL)) return
            membro.addRole(LOL)
        }else if(dados.d.emoji.id === "554314232670453780"){
            if(membro.roles.has(Yu_Gi_OH)) return
            membro.addRole(Yu_Gi_OH)
        }
    }