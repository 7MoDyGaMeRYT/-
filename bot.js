const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` اكتب اي شي هنا  `,"http://twitch.tv/iimr7modyx")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online ')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.on('message', message => {
            if (message.content.startsWith(prefix + "bot-info")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
      .setColor('RANDOM')
.setTitle('**DragonBot Info**')
.addField(':bookmark:``اسم البوت``' , ` **${client.user.tag} **` , true)
.addField(':id:``اي دي البوت``' , `** ${client.user.id} **` , true)
.addField(':robot:``السيرفرات التي يتواجد به البوت``',`**${client.guilds.size} سيرفر **`)
.addField(':busts_in_silhouette:``مجموع الاعضاء``',`** ${client.users.size}**`)
.addField(':bookmark_tabs:``مجموع الرومات``',`**${client.channels.size}**`) 
.addField(':ok_hand:``الامر الخاص بي``' , `**!**` , true)
.addField(':signal_strength:``بنق البوت``',`**${client.ping} ms**`) 
.addField(':signal_strength:``سرعة انشاء الرسالة``',`**${Date.now() - message.createdTimestamp} ms**`) 
.addField('``مساحة الرام المستخدمة``', `**${(process.memoryUsage().rss / 1048576).toFixed()}MB**`, true)
.addField('تاريخ صنع البوت', client.user.createdAt, true)
.addField('``مصممين , اصحاب البوت``',`**<@467305958062817301>**,`)
  message.channel.sendEmbed(embed);
    }
});


client.login(process.env.BOT_TOKEN);
