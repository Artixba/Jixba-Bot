const Discord = require("discord.js");
try {
    module.exports.run = async(bot, message, args) => {
        //help embed
        const helpmessage = new Discord.MessageEmbed()
        .setColor('#02791a')
        .setTitle('!spongify Help')
        .setAuthor('Artixba')
        .setDescription('Turns your message into the spongebob chicken meme text.')
        .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
        .addField('How to use', '!spongify <Your message>')
        .setImage('https://pyxis.nymag.com/v1/imgs/09c/923/65324bb3906b6865f904a72f8f8a908541-16-spongebob-explainer.2x.h473.w710.jpg')
        .setTimestamp();
        //Logic and or conditionals
        if(args[0] === 'help') return message.channel.send(helpmessage);
        function tweak (c) {
            return Math.random() < 0.5 ? c.toLowerCase() : c.toUpperCase();
        }
        let sponge = args.join(" ").slice(0);
        console.log(sponge);
        let newSponge = [];
        for (let index = 0; index < sponge.length; index++) {
            newSponge[index] = tweak(sponge[index]);
        }
        message.delete().catch(error =>{console.log(error);});
        return message.channel.send(newSponge.join(" ").slice());
    }
} catch (error) {
    console.log(error);
}
module.exports.help = {
    name: "spongify"
}