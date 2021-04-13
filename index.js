const Discord = require('discord.js');
const client = new Discord.Client();
client.login('TOKEN DO SEU BOT AQUI!!')
var resposta = ["Com certeza!!", "Talvez...", "Melhor não...", "Sim!!!!!!", "Definitivamente.",
"NÃO!", "Óbvio que não!", "Muito improvável", "Pouco provável", "Acho que sim", 
"Com certeza!", "Em hipótese alguma", "Provavelmente", "Sinceramente, eu não sei", "Eu acho provavel"]
var resposta2 = ["não","nunca","jamais","de jeito algum","provavelmente não ligo"]
var x = false

client.once('ready', () => {
    console.log('Bot ontline!');
    console.log(resposta.length)
});

client.on("message", message => {

    if (message.content == '!manipularBola')  {
        x = true 
        console.log(x)
        }
    
    else {}   
    if (message.content == '!desmanipularBola') {
        x = false
        console.log(x)
    }
    else {}
    
    if (message.content.startsWith("!bola8")) {
        if(!x) {
            const random = Math.floor(Math.random() * 15); 
            message.channel.send(resposta[random]) }
        if (x) {
            const random = Math.floor(Math.random() * 5); 
            message.channel.send(resposta2[random]);
        } 
    }        
    else {}
    
    
});
