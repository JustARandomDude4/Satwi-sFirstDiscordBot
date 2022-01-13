const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('options-info')
		.setDescription('Info about the options provided.')
		.addStringOption(option => option.setName('input').setDescription('The input to echo back')),
	async execute(interaction) {
		const value = interaction.options.getString('input');
		if (value) return interaction.reply(`Ede ne option value, do pandaga: \`${value}\``);
		return interaction.reply('Abey o,edoka option give re jara!');
	},
};