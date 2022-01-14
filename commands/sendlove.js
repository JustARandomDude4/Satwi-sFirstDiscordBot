const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton, MessageEmbed } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sendlove')
		.setDescription('Sends love to afreen'),
	async execute(interaction)
    {
	
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('❤')
					.setLabel('❤')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: '💕❣❣💕\n🌈🌈🌈Kinda meda upu ma Afreen papa thopu🌈🌈🌈\n0💗❣❣💗', components: [row] });

   },
    };

