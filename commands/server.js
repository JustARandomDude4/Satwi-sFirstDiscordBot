const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Gives server info'),
	async execute(interaction) 
	{
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\n Server created at: ${interaction.guild.createdAt}\n Owner : ${interaction.fetchOwner}`);
	},
};

