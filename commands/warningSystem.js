const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");

module.exports.run = async(bot,message,args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("You dont have permission, Bucko");
  let wuser = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0]);
}

module.exports.help = {
  name: "warning"
}
