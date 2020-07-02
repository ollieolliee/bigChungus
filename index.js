const Discord = require('discord.js');
const {Client, MessageAttachment, MessageEmbed} = require('discord.js');
const bot = new Client();
const token = 'NzEzMTkwMDIwNTU4NzQ5NzQ2.Xv4mbg.p3XFroQJxG6Kfejdg4pUV3dvy-o';

const PREFIX = '!';

bot.on('ready', () => {
    console.log('Bot Online !');
});

bot.on('message', message => {
    
    let args = message.content.substring(PREFIX.length).split(" ");

//make a math.random funtion to replace the file name so it randomly selects one
   
    switch(args[0]) {
        case 'CHUNGUS':
            
            let numGen = Math.floor(Math.random() * 6);

            //plain big chungus 
            var attachment = new MessageAttachment('bigChungus.png');

            //blue supreme big chungus
            var attachment2 = new MessageAttachment('bigChungus2.png');

           //lorax big chungus
           var attachment3 = new MessageAttachment('bigChungus3.png');

           //female alvin and the chipmunks big chungus
           var attachment4 = new MessageAttachment('bigChungus4.png');

           //quagmire big chungus
           var attachment5 = new MessageAttachment('bigChungus5.png');

           //donald trump big chungus
           var attachment6 = new MessageAttachment('bigChungus6.png');

           //huge judy hopps big chungus 
           var attachment7 = new MessageAttachment('bigChungus7.png');

           

            if(numGen == 0) {
                attachment = attachment;
            } else if(numGen == 1) {
                attachment = attachment2;
            } else if(numGen == 2) {
                attachment = attachment3;
            } else if(numGen == 3) {
                attachment = attachment4;
            } else if(numGen == 4) {
                attachment = attachment5;
            } else if(numGen == 5) {
                attachment = attachment6;
            } else if(numGen == 6) {
                attachment = attachment7;
            }

            message.channel.send(message.author, attachment);
            break;

        case 'chungus':
            if(args[1] === 'hate') {
                return message.reply('i hate jews');
            } else if(args[1] == 'love') {
                return message.reply('i love palestine :)');
            } 
        case 'clear':
            if(!args[1] && args[0] == 'clear') return message.reply('you fucking dumb nigger learn to call the bot properly')
            message.channel.bulkDelete(args[1]);
            break;
        
        case 'BigChungus':
            if(args[1] === 'Lyrics') {
                return message.channel.send("Big Big Chungus Big Chungus Big Chungus \n" +
                "Big Big Chungus Big Chungus Big Chungus\n" + 
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "\n"+
                "\t\tChungus, Big Chungus\n" +
                "\t\tChungus, Big Chungus\n" +
                "\t\tChungus, Big Chungus\n" +
                "\t\tChungus, Big Chungus\n" +
                "\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "Big Big Chungus Big Chungus Big Chungus\n" +
                "\n"+
                "\t\tChungus, Big Chungus\n" +
                "\t\tChungus, Big Chungus\n" +
                "\t\tChungus, Big Chungus\n" +
                "\t\tChungus, Big Chungus\n" +
                "\n" +
                "\t\t\tBig Big Chungus");
            }
            break;
        
        case 'help':
           
            const Embed = new Discord.MessageEmbed() 
            .setTitle("ur dumb")
            .setColor(0xFF0000)
            .setDescription("ur retarted jus look at what other people have said");
            message.author.send(Embed);
            break;

        case 'in':
            if(args[1] === 'the' && args[2] === 'jungle') {
                return message.channel.send("In the jungle the mighty jungle the chungus sleeps tonight \n" +
                " Big Chungus Big Chungus is a meme on Reddit\n" +
                "It's about a giant Bugs Bunny eatin' giant old carrots\n" +
                " Big Chungus Big Chungus is a meme on Reddit\n" +
                "It's about a giant Bugs Bunny eatin' giant old carrots");
            }
            break;
        
        case 'loopChungus':
            for(let i = 0; i < 100; i++) {
                 message.channel.send("nigger nigger nigger nigger nigger nigger nigger");
            }
    }

})

bot.login(token);
