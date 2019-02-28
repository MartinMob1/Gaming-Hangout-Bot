const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = 'NTQ0NjE0MzE0NDk4MDY0NDAy.D1iKPg.4_Ymky2JqSNU922ay-6-fXKqlQo'

bot.registry.registryGroup('simple', 'Simple' );
bot.registry.registryDefaults();
bot.registry.registerCommandsIn(_dirname + '/commands');

bot.on('message', function(message){
 if(message.content == 'gh!Hello')
 {
 message.channel.sendMessage('Hello  ' + message.author +  ' , how are you?');
 }
});

bot.on('ready' ,function(){
console.log("Ready")
}
)
bot.login(TOKEN);
