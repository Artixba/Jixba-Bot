const Discord = require("discord.js");

module.exports.run = async(bot,message,args) =>{
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You're not allowed");
  let rMember = message.guild.member(message.members.users.first()) || message.guild.members.cache.get(args[0]);
  if(!rMember) return message.reply("Couldn't find that user.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role.");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("couldn't find that role.");

  if(rMember.roles.has(gRole.id)) return message.reply("They already have that role.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Congrats, you have been given the role ${gRole.name}`)
  }catch(e){
    message.channel.send(`Congrats to <@${rMember.id}, they have been given the role ${gRole.name}. Dms were locked.`)
  }
}

module.exports.help = {
  name: "add role"
}
