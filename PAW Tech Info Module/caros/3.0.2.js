const Discord = require('discord.js');
module.exports = {
    name: 'caros-3.0.2',
	execute(message, args) {
		const exampleEmbed = new Discord.MessageEmbed()
            .setColor('#ffffff')
            .setTitle('PAW CarOS - Version 3.0.2')
            .setAuthor('PAW Tech', 'https://i.imgur.com/bbexXJF.png')
            .setDescription('Features in this version:')
            .addFields(
                { name: `App Icons:`, value: `no` },
                { name: `Control Center:`, value: `yes` },
                { name: `PAW Maps:`, value: `yes` },
                { name: `Paw Weather app:`, value: `yes` },
                { name: `Phone app:`, value: `yes` },
                { name: `Settings app:`, value: `no` },
                { name: `Clock:`, value: `yes` },
                { name: `Wallpapers:`, value: `yes` },
                { name: `Pong:`, value: `no` },
                { name: 'Sport Dashboard:', value: 'no'},
            )
            .setFooter('PAW CarOS - Version 3.0.2 - Stats', 'https://i.imgur.com/bbexXJF.png');
        
        message.channel.send(exampleEmbed);
	},
};