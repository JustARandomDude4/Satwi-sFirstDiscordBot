# Satwi-sFirstDiscordBot


How I created:
1. Created a  new dicord application, and then a discord Bot. Added into my server where I have manage authorization.
2. npm commands:
          npm init - to start a node project then initialise all details about the project, then go to vs code to open the folder.
          
          npm install discord.js     - Its a node.js module that allows us to interact with the discord API easily.
          npm install discord.js @discordjs/rest discord-api-types

3. register a slash command against the discord Api   (Slash Commands are the new, exciting way to build and interact with bots on Discord. With Slash Commands, all you have to do is type / and you're ready to use your favorite bot. You can easily see all the commands a bot has, and validation and error handling help you get the command right the first time.)

Discord allows developers to register slash commands, which provide users a first-class way of interacting directly with your application. Before being able to reply to a command, you must first register it.

    npm commands for slash:
                          npm install @discordjs/builders @discordjs/rest discord-api-types
// To solve the Missed access error, got to discord bot, go to OAuth2 >>  In-app-Authourisation >> applications.commands check the box.
        
        "node .    or node index.js     "  to run the file
