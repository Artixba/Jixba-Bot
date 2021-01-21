const Discord = require("discord.js");

async function messageSpam(user, message){
  for (let index = 0; index < timelen; index++) {
    await setTimeout(async() => {
      if(message) message.channel.send(`${user} ${message}`);
      else await message.channel.send(`${user} WYA!`);
    },index * 1500);
  }
}

module.exports.run = async (bot, message, args) => {
    try {
      console.log(`${message.content} ran.`);
      
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      let spamcount = args[1];
      let spammessage = args.join(' ').slice(25);
      let everyonemessage = args.join(' ').slice(12);
      let heremessage = args.join(' ').slice(8)
      console.log(spammessage);

      const helpmessage = new Discord.MessageEmbed()
      .setColor('#02791a')
      .setTitle('!spam Help')
      .setAuthor('Artixba')
      .setDescription('Sends a user customized message to a specified user a declared number of times every 1.5 seconds.')
      .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
      .addField('How to use', '!spam <username> <number of messages> <optional: custom message>')
      .setImage('https://i.imgur.com/tEMjI8W.jpeg')
      .setTimestamp();

      if( args[0] === 'help') return message.channel.send(helpmessage);
      else if(args[0] === '@everyone') {
        messageSpam(args[0], everyonemessage);
      }
      else if(args[0] === '@here'){
        messageSpam(args[0], heremessage);
      }
      else if(!rUser) return message.channel.send("Couldn't find user to spam!");
      else if(!spamcount) return message.channel.send("Time not set!");
      else {
        messageSpam(rUser, spammessage);
      }
      console.log(`rUser = ${rUser} and spamcount = ${spamcount}`);
    } catch (error) {
      console.log(error);
    }
    }
    
    module.exports.help = {
      name: "spam"
    }