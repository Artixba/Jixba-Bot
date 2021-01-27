const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {

  let =bUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  const helpmessage = new Discord.MessageEmbed()
  .setColor('#02791a')
  .setTitle('!ban Help')
  .setAuthor('Artixba')
  .setDescription('Bans specified user for a user-specified reason.')
  .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
  .addField('How to use', '!ban <username> <reason for ban>')
  .setImage('https://i.kym-cdn.com/photos/images/original/001/384/345/210.png')
  .setTimestamp();
  //Logic and or conditionals
  if(args[0] === 'help') return message.channel.send(helpmessage);
  if(!bUser) return message.channel.send("Can't find user");
  let bReason = args.join(" ").slice(22); // removes name of user so that it only prints out the reason for kick
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("No way!"); // checks to see if it's possible for user using command to kick user
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked")
  if(!bReason) return message.channel.send("You must enter a reason for kick.");

  let banEmbed = new Discord.MessageEmbed()
  .setDescription("~Ban~")
  .setColor("#ff0000")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned by", `<@${message.author.id}> with ID ${message.author.id}`) //<@usernamd> makes it so that
  //it mentions them and makes their name clickable
  .addField("Banned in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);
  //Help Message


  // let banChannel = message.member.guild.channels.cache.find(`name`, "jixbas-workshop");
  // if(!banChannel) return message.channel.send("Can't find jixbas-workshop");
  message.guild.member(bUser).ban(bReason)
  message.channel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
