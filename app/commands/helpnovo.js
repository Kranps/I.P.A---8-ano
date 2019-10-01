const Discord = require("discord.js");

exports.run = (client, message, args, tools) => {
  let pages = [
    "1",
    ":white_small_square: ban - Bane um usuário",
    ":white_small:square: /falar - Fala utilizando o BOT",
    "Administração"
  ];
  let page = 1;

  let HelpEmbed = new Discord.RichEmbed()

    .setColor(0xffffff)
    .setTitle(`Escolha uma categoria`)
    .setDescription(
      `:white_small_square: <:loritta:628609893359812608> : Administração`
    )
    .setFooter(`Página ${page} de ${pages.length}`);

  let Administração = new Discord.RichEmbed()

    .setColor(0xffffff)
    .setTitle(`Categoria escolhida: **Adminitração**.`)
    .setDescription(
      `:white_small_square: /ban - Bane um usuário. \n :white_small_square: /kick - Expulsa um usuário do servidor;`
    )
    .setFooter(`Página ${page} de ${pages.length}`);

  let HelpEmbed2 = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle(`Comandos do BOT OFICIAL`)
    .setDescription(`:loritta: Administração`)
    .setFooter(`Página ${page} de ${pages.length}`);

  message.channel.send(HelpEmbed).then(msg => {
    msg.react("◀").then(r => {
      msg.react("▶");
      msg.react("628609893359812608");

      const blackwardsFilter = (reaction, user) =>
        reaction.emoji.name === "◀" && user.id === message.author.id;
      const forwardsFilter = (reaction, user) =>
        reaction.emoji.name === "▶" && user.id === message.author.id;
      const lorittaFilter = (reaction, user) =>
        reaction.emoji.name === "628609893359812608" &&
        user.id === message.author.id;

      const blackwards = msg.createReactionCollector(blackwardsFilter, {
        time: 6000
      });
      const forwards = msg.createReactionCollector(forwardsFilter, {
        time: 6000
      });
      const loritta = msg.createReactionCollector(lorittaFilter, {
        time: 6000
      });

      loritta.on("collect", r => {
        if (page === 1) return;
        page--;
        msg.edit(Administração);
      });
      console.log("s");

      blackwards.on("collect", r => {
        if (page === 1) return;
        page--;
        HelpEmbed.setTitle(pages[page - 1]);
        HelpEmbed.setFooter(`Página ${page} de ${pages.length}`);
        msg.edit(HelpEmbed);
      });

      blackwards.on("collect", r => {
        if (page === 1) return;
        page--;
        HelpEmbed.setTitle(pages[page - 1]);
        HelpEmbed.setFooter(`Página ${page} de ${pages.length}`);
        msg.edit(HelpEmbed);
      });
      blackwards.on("collect", r => {
        if (page === 1) return;
        page--;
        HelpEmbed.setTitle(pages[page - 1]);
        HelpEmbed.setFooter(`Página ${page} de ${pages.length}`);
        msg.edit(HelpEmbed);
      });

      forwards.on("collect", r => {
        if (page === pages.length) return;
        page++;
        HelpEmbed.setDescription(pages[page - 1]);
        HelpEmbed.setFooter(`Página ${page} de ${pages.length}`);
        msg.edit(HelpEmbed);
      });
    });
  });
};
