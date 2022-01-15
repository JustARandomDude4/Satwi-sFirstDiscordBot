# Birthday Bot 🎉✨🎆🎁

Made with ❤ for my dear friend 💗**Afreen**💗

## Features 📋   \\to be added soon
⚡️ \Command Handing
⚡️ \Event Handling
⚡️ \send, receive, and respond to buttons

## Steps I followed to create my own bot🔌⚙🛠

How I created :
1. Created a  new dicord application, and then a discord Bot. Added into my server where I have manage authorization.
2. npm commands:
```
          npm init                   - to start a node project then initialise all details about the project, then go to vs code to open the folder.
          npm install discord.js     - Its a node.js module that allows us to interact with the discord API easily.
```
2. [Create an application](https://discord.com/developers/applications/) - I then  set name for my bot , description, avatar.

3. Selected Bot from left navigation and "Add Bot" to  set name and icon.

4. Add bot to the server with the url: `https://discord.com/oauth2/authorize?client_id=YOUR_CLIENT_ID&scope=bot`   (copy paste the client Id in that place)

5. register a slash command against the discord Api   (Slash Commands are kotta way to build and interact with bots on Discord. With Slash Commands,  / type cheste u canchoose the command

    npm commands for slash:
    
                          npm install @discordjs/builders @discordjs/rest discord-api-types 
// To solve the Missed access error(I faced that problem thats why), got to discord bot, go to OAuth2 >>  In-app-Authourisation >> applications.commands check the box.
6. Run the bot!
       ``` "node .    or node index.js     "  to run the file(node .  can be used only when main:index.js otherwise set it)```

## My project Directory Structure 📄📑

Satwi's Bot/
├── node_modules
├── config.json
├── deploy-commands.js
├── Commands                                      -which is where you'll store all of your commands.
├── Events                                        -which is where you'll store all of your events, and then retrieve dynamically from index.js
├── index.js
├── package-lock.json
└── package.json


## Snippets of How Bot works:

<p align="center">
  <img src="https://github.com/JustARandomDude4/Satwi-sFirstDiscordBot/blob/main/DiscordBot1.PNG" width="1000" title="Final Results">
</p>

<p align="center">
  <img src="https://github.com/JustARandomDude4/Satwi-sFirstDiscordBot/blob/main/DiscordBot2.PNG" width="1000" title="Final Results">
</p>

<p align="center">
  <img src="https://github.com/JustARandomDude4/Satwi-sFirstDiscordBot/blob/main/DiscordBot3.PNG" width="1000" title="Final Results">
</p>
