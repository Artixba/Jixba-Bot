const Discord = require ('discord.js');

module.exports.run = async (bot, message, args) => {
    const helpmessage = new Discord.MessageEmbed()
      .setColor('#02791a')
      .setTitle('Help')
      .setAuthor('Artixba')
      .setDescription("List of bot commands")
      .setThumbnail('https://images.ctfassets.net/cbydjs9ahtk4/1F8FFvdZWaiyhmQOecuZRF/339f42cce5bb47aa767e420d026a46f6/Screen_Shot_2019-05-08_at_3.00.15_PM.png?h=840')
      .addFields(
          {name:'!spam', value: 'Spams mentioned user a set amount of times.'},
          {name:'!poll', value: 'Makes a personal poll to let people know what you want to play.'},
          {name:'!report', value: 'Reports a mentioned user with for a set reason.'},
          {name:'!meme', value: 'Posts a random meme, courtesy of the bois.'},
          {name:'!hello', value: 'Bot says hello :)'},
          {name:'!botinfo', value: 'Gives general information on bot'},
          {name:'!serverinfo', value: 'Gives general server information'}
      )
      .setImage('https://brianmunoz.co/imaqtpie/images/qt-twitch.jpg')
      .setTimestamp();

      message.channel.send(helpmessage);
}

module.exports.help = {
    name: 'help'
}
