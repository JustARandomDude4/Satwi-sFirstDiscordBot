const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('gift')
		.setDescription('Give a birthday gift to Afreen'),
	async execute(interaction) {
		await interaction.reply('ππππ­πΏπππ§π¬π«π§π₯§π¦πΎπ₯\n Gifting Afreen all yummy food !!\n');
	},
};


