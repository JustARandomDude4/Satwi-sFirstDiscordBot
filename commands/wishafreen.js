const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wishafreen')
		.setDescription('Wish Happy birthday to Afreen'),
	async execute(interaction) {
		return interaction.reply('π₯π₯Happieee Birthday Afreenπ₯π₯\n We lubbbb u tonssssssssss.\n All we can wish u is a happy, content and fun life\n πππ§¨β¨πππππ\n');
	},
};