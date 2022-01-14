const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('sendlove')
		.setDescription('sends love to Afreen'),
	async execute(interaction) {
		await interaction.reply('💕❣❣💕\n🌈🌈🌈Kinda meda upu ma Afreen papa thopu🌈🌈🌈\n💕❣❣💕');
	},
};




