const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});
const fs = require("fs");//we need to read all files within command system
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{ //grabs files within commands folder
  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f,i) =>{
    let props = require(`./commands/${f}`); // grabs commands from folder
    console.log(`${f}loaded!`); // prints it on command prompt/powershell
    bot.commands.set(props.help.name, props);
  });

});
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`); //when using ${} back ticks are used (the key tilde key)
  bot.user.setActivity("Three girls, one Chunchumaru");
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return; //ignores the person if someone tries to dm the bot

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" "); //every time there's a space, it will save the word
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  // the cmd and args make it so that from the ""!say Hello" statement, it will seperate the command
  // the command being !say, and seperates it from the argument args
  let commandfile = bot.commands.get(cmd.slice(prefix.length)); //gets file we need
  if(commandfile) commandfile.run(bot,message,args); // runs the file

  if(cmd === `${prefix}hello`){
    let messageembed = new Discord.RichEmbed()
    //.addField("Hello, ", `<@${message.member.id}>`)
    return message.channel.send("Hello, "+ `<@${message.author.id}>`+ " UwU X3" ); //!hello returns Hello! on discord
  }

  if(cmd === `${prefix}botinfo`){
    let bicon = bot.user.displayAvatarURL; //gets your bot's image
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information") //Shows information as to what the bot does
    .setThumbnail(bicon) // displays your bot's icon/thumbnail
    .setColor("#15f153") //Adds color to info field
    .addField("Bot Name", bot.user.username)//returns the name of your bot
    .addField("Created on", bot.user.createdAt); //returns your bot creation date
    return message.channel.send(botembed); // prints all of the aforementioned info out
  }

  if(cmd === `${prefix}serverinfo`){
    let sicon = message.guild.iconURL; // gets server icon
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created on", message.guild.createdAt)
    .addField("You joined", message.guild.member.joinedAt) // returns member  server join date
    .addField("Total Members", message.guild.memberCount); // returns number of people within server
    return message.channel.send(serverembed)
  }

});

bot.login(botconfig.token);
