const ms = require("ms");
module.exports.run = async (bot, message, args) => {
    if(args[0] === "help") return message.send("Let's other people know what you want to play.\n⚒ = Pummel Party\n🏴‍☠️ = Sea of Thieves\n⛏ = Deep Rock Galactic\n🃏 = Uno\n🪂 = Fall Guys\n📦 = JackBox Paty Pack\n💀 = Dead by Daylight");
    try {
        const msg = await message.channel.send("Select what you want to play.");
        await msg.react("⚒");
        await msg.react("🏴‍☠️");
        await msg.react("⛏");
        await msg.react("🃏");
        await msg.react("🪂");
        await msg.react("📦");
        await msg.react("💀");
        //Help Message
        const helpmessage = new Discord.MessageEmbed()
        .setColor('#02791a')
        .setTitle('!poll Help')
        .setAuthor('Artixba')
        .setDescription('runs a 15-second poll for yourself to tell others what you wanna play.')
        .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
        .addField('How to use', '!poll')
        .addField('Note: You must wait until all emojis are loaded before you can vote.')
        .setImage('https://i.redd.it/uudjr9uji5jz.jpg')
        .setTimestamp();
        //Logic and or conditionals
        if(rUser === 'help') return message.channel.send(helpmessage);
        let pollchannel = console.log(message.guild.available);
        // if(!pollchannel) return message.channel.send("Couldn't find the-bois-lab");
        const filter = (reaction, user) => {
            console.log("I'm in filter");
            return user.id === message.author.id && (reaction.emoji.name === "⚒" || reaction.emoji.name === "🏴‍☠️" || reaction.emoji.name === "⛏" || reaction.emoji.name === "🃏" || reaction.emoji.name === "🪂" || reaction.emoji.name === "📦" || reaction.emoji.name === "💀"); 
        };
        await msg.awaitReactions(filter, {max: 8, time : 15000, errors: ['time']})
        .then(async collected => {
            console.log("I'm in the then().");
            if(collected.emoji.name === "⚒") return message.channel.send(`${message.author} wants to play Pummel Party!`);
            else if(collected.emoji.name === "🏴‍☠️") return message.channel.send(`${message.author} wants to play Sea of Thieves!`);
            else if(collected.emoji.name === "⛏") return message.channel.send(`${message.author} wants to play Deep Rock Galactic!`);
            else if(collected.emoji.name === "🃏") return message.channel.send(`${message.author} wants to play Uno!`);
            else if(collected.emoji.name === "🪂") return message.channel.send(`${message.author} wants to play Fall Guys!`);
            else if(collected.emoji.name === "📦") return message.channel.send(`${message.author} wants to play The JackBox Party Pack!`);
            else if(collected.emoji.name === "💀") return message.channel.send(`${message.author} wants to play Dead by Daylight!`);
            else return message.channel.send("Wrong emoji.");
        })
        .catch(async collected => {
            console.log("I'm in the catch");
            message.channel.send(collected.size+ "←");
            return message.reply("You didn't react appropriately within 10 seconds >:(");
        });
    } catch (error) {
        console.log(error);
    }
}
module.exports.help = {
    name: "poll"
}