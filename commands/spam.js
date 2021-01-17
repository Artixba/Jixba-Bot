module.exports.run = async (bot, message, args) => {
    try {
      console.log(`${message.content} ran.`);
      
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
      let timelen = args[1];
      if( args[0] === 'help') return message.channel.send('Sends a message to a specified user a declared number of times every 1.5 seconds.');
      else if(!rUser) return message.channel.send("Couldn't find user to spam!");
      else if(!timelen) return message.channel.send("Time not set!");
      
      

      console.log(`rUser = ${rUser} and timelen = ${timelen}`);
      
      for (let index = 0; index < timelen; index++) {
        await setTimeout(async() => {
          await console.log("There is user and time");
          await message.channel.send(`${rUser} WYA!`);
        },index * 1500);
      }

      

    } catch (error) {
      console.log(error);
    }


    }
    
    module.exports.help = {
      name: "spam"
    }