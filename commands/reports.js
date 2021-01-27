const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  try {
    // if(cmd === `${prefix}report`){
  // let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  // if(!rUser) return message.channel.send("couldn't find user.");
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  console.log(rUser);

  const helpmessage = new Discord.MessageEmbed()
  .setColor('#02791a')
  .setTitle('!report Help')
  .setAuthor('Artixba')
  .setDescription('reports specified user for a user-specified reason.')
  .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
  .addField('How to use', '!report <username> <reason for report>')
  .setImage('https://i.kym-cdn.com/photos/images/facebook/001/236/373/534.png')
  .setTimestamp();
  //Logic and or conditionals
  if(args[0] === 'help') return message.channel.send(helpmessage);
  if(!rUser) return message.channel.send("couldn't find user.");
  let reason = args.join(" ").slice(22); // ID is 22 characters long

  let reportEmbed = new Discord.MessageEmbed()//embed
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);
  //Help Message
  

  // message.channel.send(reportEmbed); //prints out report within the channel
// below shows how to get the report and print it out in another channel, supposedly the
// reports channel, but for the sake of this example I'll put it within a channel
//named jixbas-workshop.
  let reportschannel = message.guild.channels.find(`name`, "the-bois-lab");
  if(!reportschannel) return message.channel.send("Couldn't find the-bois-lab");

  message.delete().catch(O_o=>{}); // deletes last message
  reportschannel.send(reportEmbed); //sends message to another channel
  } catch (error) {
    console.log(error);
  }

//return;
//}
}

module.exports.help = {
  name: "report"
}
// the if(cmd) arrow function and the return keyword  must be uncommented if using it
//within the index.js file.
