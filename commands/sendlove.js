const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sendlove')
		.setDescription('sends love to Afreen'),
	async execute(interaction) {
		await interaction.reply('πβ£β£π\nπππKinda meda upu ma Afreen papa thopuπππ\nπβ£β£π');
	},
};




