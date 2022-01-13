const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wishafreen')
		.setDescription('Wish Happy birthday to Afreen'),
	async execute(interaction) {
		return interaction.reply('💗💗Happy Birthday Afreen💗💗\n We all know how sweet and cute u r.\n All we can wish u is a happy, content and fun life\n 🎈🎇🧨✨🎉🎊🎁🎁🎈\n');
	},
};