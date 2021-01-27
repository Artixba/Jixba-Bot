const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot,message,args) =>{
 //Help Message
 const helpmessage = new Discord.MessageEmbed()
 .setColor('#02791a')
 .setTitle('!tempmute Help')
 .setAuthor('Artixba')
 .setDescription('Temporarily mutes selected user for a set amount of time. You must have the appropriate permissions in order to use it.')
 .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
 .addField('How to use', '!tempmute <Username> <time>')
 .setImage('https://i.ytimg.com/vi/pbrhJwkosKU/maxresdefault.jpg')
 .setTimestamp();
 //Logic and or conditionals
 if(args[1] === 'help') return message.channel.send(helpmessage);
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
  if(!tomute) return message.reply("couldn't find user");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them");
  let muterole = message.guild.roles.cache.find(role => role.name === "muted");
  if(!muterole){
    try{
      muterole = await message.guild.roles.create({
        name: "muted",
        color: "000000",
        permissions:[]
      })
      message.guild.channels.forEach(async(channel, id) =>{
        await channel.overwritePermissions(muterole,{
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  let mutetime = args[1];
  if(!mutetime) return message.reply("you didn't specify a time");

  await(tomute.roles.add(muterole.id));
  message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);
  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}. has been unmuted.`);
  }, ms(mutetime))
;}

module.exports.help = {
  name: "tempmute"
}
