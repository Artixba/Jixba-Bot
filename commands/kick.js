const Discord = require("discord.js");
module.exports.run = async (bot, message, args ) => {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user");
  let kReason = args.join(" ").slice(22); // removes name of user so that it only prints out the reason for kick
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("No way!"); // checks to see if it's possible for user using command to kick user
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked")
  if(!kReason) return message.channel.send("You must enter a reason for kick.");

  let kickEmbed = new Discord.MessageEmbed()
  .setDescription("~Kick~")
  .setColor("#ff0000")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked by", `<@${message.author.id}> with ID ${message.author.id}`) //<@usernamd> makes it so that
  //it mentions them and makes their name clickable
  .addField("Kicked in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);
  //Help message
  const helpmessage = new Discord.MessageEmbed()
  .setColor('#02791a')
  .setTitle('!kick Help')
  .setAuthor('Artixba')
  .setDescription('Kicks specified user for a user-specified reason.')
  .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
  .addField('How to use', '!kick <username> <reason for kick>')
  .setImage('https://i.ytimg.com/vi/CUWcRzGEVew/hqdefault.jpg')
  .setTimestamp();
  //Logic and or conditionals
  if(kUser === 'help') return message.channel.send(helpmessage);
  // let kickChannel = message.guild.roles.cache.find(guild => guild.name === 'the-bois-lab');
  // if(!kickChannel) return message.channel.send("Can't find jixbas-workshop nor the bois-lab");
  message.guild.member(kUser).kick(kReason)
  message.channel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
