const Discrord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user");
  let bReason = args.join(" ").slice(22); // removes name of user so that it only prints out the reason for kick
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No way!"); // checks to see if it's possible for user using command to kick user
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked")

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#ff0000")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`) //<@usernamd> makes it so that
  //it mentions them and makes their name clickable
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banChannel = message.guild.channels.find(`name`, "jixbas-workshop");
  if(!banChannel) return message.channel.send("Can't find jixbas-workshop");
  message.guild.member(bUser).ban(bReason)
  banChannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
