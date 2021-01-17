module.exports.run = async (bot, message, args) => {
    try {
      console.log(`${message.content} ran.`);
      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user to spam!");
      let timelen = args[1];
      if(!timelen) return message.channel.send("Time not set!");

      console.log(`rUser = ${rUser} and timelen = ${timelen}`);
      
      if(rUser) async timelen => {
        console.log("There is user and time");
        for (let index = 0; index < timelen; index++) {
          await message.channel.send(`${rUser} WYA!`)
          await setTimeout(1000);
        }
      };
    } catch (error) {
      console.log(error);
    }


    }
    
    module.exports.help = {
      name: "spam"
    }