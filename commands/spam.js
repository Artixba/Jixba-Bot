const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    try {
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("couldn't find user to spam!");
      let timelen = args[1]
      let spamEmbed = new Discord.RichEmbed()//embed
      .addField(`${rUser}!`);
    //   await let runSpam = () => {

      
    //   for(i=0; i<timelen; i++){
    //       (setTimeout(1000));
    //       console.log(`Spamming ${rUser} ${timelen} time/s!`);
    //       return message.send(spamEmbed).catch(O_o =>{});
    //   }
    // };
      
    } catch (error) {
      console.log(error);
    }


    }
    
    module.exports.help = {
      name: "spam"
    }