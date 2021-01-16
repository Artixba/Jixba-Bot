const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const fs = require("fs"); //we need to read all files within command system

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

module.exports.run = async(bot, message, args) => {
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" "); //every time there's a space, it will save the word
  let pic = getRandomIntInclusive(0,6);
  if(messageArray.length > 1){
    pic = messageArray[1];
  }
  let cmd = messageArray[0];
  console.log(`running meme command for message: ${message}`);

  // Create the attachment using Attachment
  const attachment = new Discord.Attachment(`./commands/memefolder/${pic}.png`);

  // Send the attachment in the message channel with a content
  return message.channel.send(`${message.author},`, attachment)
    .catch(error => {
      if (error.message.includes('ENOENT')) {
        return message.channel.send(`${pic} file not found`);
      }
      console.log(`error when sending meme reply: ${error}`);
    });
}

module.exports.help = {
  name: "meme"
}