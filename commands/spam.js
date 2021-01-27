const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  try {
    console.log(`${message.content} ran by ${message.author}.`);
    //Setting variables
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
    let spamcount = parseInt(args[1]); // '1' 1
    let spammessage = args.slice(2).join(' ');
    //Spam function
    async function messageSpam(user, Message, stop){
      if(spamcount > 10){
        spamcount = 10;
        message.channel.send('Your number is too high. Spamming 10 times...')
      } 
      try {
        for (let index = 0; index < spamcount; index++) {
          await setTimeout(async() => {
            if(Message === '') bot.users.cache.get(user.id).send('WYA!');
            if(Message) bot.users.cache.get(user.id).send(Message);
            if (index == spamcount - 1) return message.channel.send('Spam finished sending.');
          },index * 1500);
        }
      } catch (error) {
        message.channel.send('Spam amount not set.')
      }
    }
    // Help Message
    const helpmessage = new Discord.MessageEmbed()
    .setColor('#02791a')
    .setTitle('!spam Help')
    .setAuthor('Artixba')
    .setDescription('Sends a user customized message to a specified user a declared number of times every 1.5 seconds.')
    .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
    .addField('How to use', '!spam <username> <number of messages> <optional: custom message>')
    .setImage('https://i.imgur.com/tEMjI8W.jpeg')
    .setTimestamp();
    //Spam logic and conditions
    if(args[0] === 'stop') return true;
    if( args[0] === 'help') return message.channel.send(helpmessage);
    else if(args[0] === '@everyone' || args[0] === '@here') {
      return messageSpam(message.author, "Can't spam everyone in server dum dum :middle_finger: ");
    }
    if(!rUser) return message.channel.send("Couldn't find user to spam!");
    if(!spamcount) return message.channel.send('Spam amount not set!')
    if(rUser && spamcount) return messageSpam(rUser, spammessage); 
  } catch (error) {
    console.log(error);
  }
}
//Node JS stuff 
module.exports.help = {
  name: "spam"
}