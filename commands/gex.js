const Discord = require("discord.js");
try {
    module.exports.run = async (bot, message, args) => {
        //help embed
        const helpmessage = new Discord.MessageEmbed()
        .setColor('#02791a')
        .setTitle('!gex Help')
        .setAuthor('Artixba')
        .setDescription('Gets the bot to say a funny oneliner!')
        .setThumbnail('https://i.imgur.com/UThwfDM.jpeg')
        .addField('How to use', '!gex')
        .setImage('https://i.pinimg.com/originals/b6/be/a4/b6bea4f1ee8f3450835682db83793007.png')
        .setTimestamp();
        //Logic and or conditionals
        if(args[0] === 'help') return message.channel.send(helpmessage);
        let note =["Note to self: Don’t ride a convertible in Dallas, Texas.","Note to self: don’t take your shoes off at Quentin Tarantino’s house.",
        "Note to self: Never say 'It's tail time' at Harvey Weinstein's house.","Note to self, don't open the fridge at Jeffrey Dahmer's.","Note to self, don’t take your socks off at Dan Schneider’s house.",
        "Note to self: don’t bring a axe & a typewriter at Jack Nichelson’s house.","Note to self, never say 'it's just a game' at Tyler Blevin's house.","Note to self: don't spread positivity at the HIV clinic.",
        "Note to self: Don’t accept an invitation to Jeffery Epstein’s island.","Note to self: Don't take free samples in Wuhan, China.","Note to self: Never get in an elevator after Solange and Ray Rice."
        ];
        let like = ["This is like wearing socks in Quentin Tarantino's house.","This is like getting the hiccups in Anne Frank’s attic.","This is like drinking a cocktail at Bill Cosby's house.","This is like playing a first person shooter at Hideo Kojima's house.",
        "This is like playing minesweeper at Osama Bin Laden's house.","This is like being a straight man at James Charles' house","This is like baking cookies at Michael Bay’s houses.","This is like having dinner at Bill Cosby's house.",
        "This is like acting in a Doug Walker Movie.","This is like writing jokes at Seth MacFarlane's house.","This is like being a women at Chris Brown’s house!","This is like having a seizure at Onision's house.",
        "This is like playing charades at Stevie Wonder's house.","This is like having a wedding at OJ Simpson’s house!","This is like committing suicide in Epstein's jail cell.","This is like playing hide and seek at Jeffrey Epstein's house.",
        "This is like drinking water at Cardi B's house.","This is like doing LSD at Jack Staubers house.","This is like being gay at Bowser's house.","This is like losing your shoes at Dan Schneider’s house!",
        "This is like children's hour at Michael Jackson's house!","This is like playing Bookworm Adventures at Floyd Mayweather's house.","This is like being a child at Willy Wonka's factory!",
        "This is like making a your mom joke at Adam Sandler's house.","This is like living in a society at Joaquin Phoenix's house!","This is like playing Pokemon at Seto Kaiba's house.","This is like playing with toys at Tom Hanks’ house.",
        "This is like being a cat at Shane Dawson’s house!","This is like attending a dinner party at Michael Scott's house.","This is like using hand lotion at Michael Moore’s house","This is like eating a cheesecake at John Travolta’s",
        "This is like having the Kids Choice Awards at R. Kelly's house.","This is like divorce night at OJ Simpson's house!","This is like being a minor at Jeffrey Epstein’s house!","This is like smoking DMT at Joe Rogan’s house!",
        "This is like getting in a nerf war with Kurt Cobain.","This is like a parade at JFK’s house!","This is like having a slumber party with The Kardashians.","This is like playing backyard football at Jerry Sandusky's",
        "This is like playing golf at Joel Miller’s house!"
        ];     
        function line(){
            return Math.random() < .3 ? note[Math.round(note.length*Math.random())] : like[Math.round(like.length*Math.random())];
        }
        message.delete().catch(error =>{console.log(error);});
        return message.channel.send(line()); 
    }
} catch (error) {
    console.log(error);
}
module.exports.help = {
    name: "gex"
  }
  