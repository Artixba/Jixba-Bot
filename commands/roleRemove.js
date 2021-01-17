const Discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You're not allowed");
  let rMember = message.guild.member(message.members.users.first()) || message.guild.members.cache.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("couldn't find that role.");

  if(!rMember.roles.has(gRole.id)) return message.reply("They don't have that role");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been relieved of ${gRole.name} duties`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}, they have been relieved of the role, ${gRole.name}. Dms were locked.`)
  }
}

module.exports.help = {
  name: "remove role"
}
