const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
// if(cmd === `${prefix}report`){
  let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!rUser) return message.channel.send("couldn't find user.");
  let reason = args.join(" ").slice(22); // ID is 22 characters long

  let reportEmbed = new Discord.RichEmbed()//embed
  .setDescription("Reports")
  .setColor("#15f153")
  .addField("Reported User", `${rUser} with ID: ${rUser.id}`)
  .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
  .addField("channel", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", reason);
  // message.channel.send(reportEmbed); //prints out report within the channel
// below shows how to get the report and print it out in another channel, supposedly the
// reports channel, but for the sake of this example I'll put it within a channel
//named jixbas-workshop.
  let reportschannel = message.guild.channels.find(`name`, "the-bois-lab");
  if(!reportschannel) return message.channel.send("Couldn't find the-bois-lab");

  message.delete().catch(O_o=>{}); // deletes last message
  reportschannel.send(reportEmbed); //sends message to another channel
//return;
//}
}

module.exports.help = {
  name: "report"
}
// the if(cmd) arrow function and the return keyword  must be uncommented if using it
//within the index.js file.
