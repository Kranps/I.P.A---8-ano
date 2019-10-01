.const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    let clientping = new Date() - message.createdAt;
    message.delete().catch()

    let pEmbed = new Discord.RichEmbed()
        .setTitle(" :shopping_cart: Loja da RedeSpartan :shopping_cart:") 
        .setDescription(`
                  **•VIPS•**
<@&622629380631560204>
Mensal:R$50
Permanente:R$60

<@&619705084774842389>
Mensal:R$40
Permanente:R$50

<@&619705087744540704>
Mensal:R$30
Permanente:R$40

<@&619705091154247681>
Mensal:R$20
Permanente:R$30

<@&619705093620760605>
Mensal:R$10
Permanente:R$20

                  **•CASH•**

50.000:R$50
40.000:R$40
30.000:R$30
20.000:R$20
10.000:R$10

Caso for comprar VIP/CASH contate um <@&619687815612989458>

**Formas de pagamento**
:mercadopago: Mercado Pago
:paypal: PayPal`)
    .setFooter(`Solicitado por: ${message.author.tag}`, message.author.displayAvatarURL)
        message.channel.send(pEmbed)
}

module.exports.help = {
    name: "loja"
}
