console.log("Beep Beep 👀👀");

const fs = require('fs');
const { Client, Collection, Intents, MessageActionRow, MessageButton,MessageEmbed } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	if (interaction.commandName === 'ping') {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('primary')
					.setLabel('Primary')
					.setStyle('PRIMARY'),
			);

		await interaction.reply({ content: 'Pong!', components: [row] });
	}
});
client.on('interactionCreate', interaction => {
	if (!interaction.isButton()) return;
	console.log(interaction);
});

// Command handling code 
client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.data.name, command);
}

// Event Handling code 
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
// Buttons


client.login(token);
/*
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		return interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});*/

/*
//writing a msg
client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Hi User! Nice to meet u. 🤗🤗But dont u think instead of  pinging me, u are supposed to study for exam ?😑😑 Go study LOSER 🙄');
	} else if (commandName === 'server') {
		await interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\n Server created at: ${interaction.guild.createdAt}\n Owner : ${interaction.fetchOwner}`);
	} else if (commandName === 'user') {
		await interaction.reply(`Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`);
	}
});

client.login(token);




// writing an event handler:message
client.on('message', gotMessage);

function gotMessage(msg)
{
  console.log(msg);
  if(msg.content=='hi bot')
  {
    msg.reply('Hello mate,Nice to meet u 😀😀💗💗');
  }
}


/*

//making a simple bot
const { Client, Intents } = require('discord.js');                     //require func imports the discord.js module
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });            // Client is js object  that connects to dicord api to runt he bot
client.login('OTMxMTMwMDI1OTM0MTkyNjUw.Yd_8aQ.oQEMRflr4DIXDtKw8Pnz6jtrrZY');    // authenticate the bot with bot token 
//to know when authentication is done, on()

//anonymous function type
client.on('ready', () => {     //to handle event named ready
  console.log(`Logged in as ${client.user.tag}! 💗💗`);
});

// another event handler. here its me
client.on('interactionCreate', async interaction => {
  if (!interaction.isCommand()) return;

  if (interaction.commandName === 'ping') {
    await interaction.reply('Pong!');
  }
});

client.on('message',gotMessage);

function gotMessage(msg)  
{
  console.log(msg.content);
  if(msg.content ==='hi satwi')  
  {   msg.reply('Heyyy dear butterfly ❤💗💕');}
}
*/


// generally hardcoding the token directly iss a bad idea
/*   olde way wont work
const Discord= require('discord.js');   
const client =new Discord.Client();      
*/


