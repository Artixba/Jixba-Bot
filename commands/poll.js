module.exports.run = async (bot, message, args) => {
    if(args[0] === "help") return message.reply("Let's other people know what you want to play.\n⚒ = Pummel Party\n🏴‍☠️ = Sea of Thieves\n⛏ = Deep Rock Galactic\n🃏 = Uno\n🪂 = Fall Guys\n📦 = JackBox Paty Pack");
    try {
        const msg = await message.channel.send("Select what you want to play.");
        await msg.react("⚒");
        await msg.react("🏴‍☠️");
        await msg.react("⛏");
        await msg.react("🃏");
        await msg.react("🪂");
        await msg.react("📦");

        let pollchannel = console.log(message.guild.available);
        // if(!pollchannel) return message.channel.send("Couldn't find the-bois-lab");

        const filter = (reaction, user) => {
            console.log("I'm in filter");
            return user.id === message.author.id && (reaction.emoji.name === "⚒" || reaction.emoji.name === "🏴‍☠️" || reaction.emoji.name === "⛏" || reaction.emoji.name === "🃏" || reaction.emoji.name === "🪂" || reaction.emoji.name === "📦"); 
        };

        await msg.awaitReactions(filter, {max: 1, time : 10000, errors: ['time']})
        .then(async collected => {
            console.log("I'm in the then().");
            if(collected.first().emoji.name === "⚒") return message.channel.send(`${message.author} wants to play Pummel Party!`);
            else if(collected.first().emoji.name === "🏴‍☠️") return message.channel.send(`${message.author} wants to play Sea of Thieves!`);
            else if(collected.first().emoji.name === "⛏") return message.channel.send(`${message.author} wants to play Deep Rock Galactic`);
            else if(collected.first().emoji.name === "🃏") return message.channel.send(`${message.author} wants to play Uno`);
            else if(collected.first().emoji.name === "🪂") return message.channel.send(`${message.author} wants to play Fall Guys`);
            else if(collected.first().emoji.name === "📦") return message.channel.send(`${message.author} wants to play The JackBox Party Pack`);
            else return message.channel.send("Wrong emoji.");
        })
        .catch(async collected => {
            console.log("I'm in the catch");
            return message.reply("You didn't react appropriately within 10 seconds >:(");
        });

    } catch (error) {
        console.log(error);
    }
}

module.exports.help = {
    name: "poll"
}