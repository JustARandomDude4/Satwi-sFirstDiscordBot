module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`I am always Ready re, I am logged in as ${client.user.tag}`);
	},
};
