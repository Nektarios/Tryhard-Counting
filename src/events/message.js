const { Client } = require('../index.js'),
    config = require("../settings/config.json"),
    { checkNumber } = require('../utils/checkNumCounting.js');

Client.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0].toLowerCase(); //geia sas
    let args = messageArray.slice(1);
    let command;

    if (!message.content.startsWith(config.Prefix)) {

        if (!parseFloat(message.content)) return;
        checkNumber(message);

    } else {

        if (Client.commands.has(cmd)) {
            command = Client.commands.get(cmd);
        }

        if (command) {
            await message.delete();
            command.run(Client, message, args);
        }
        let cmdfile = Client.commands.get(cmd.slice(config.Prefix.length));
        if (cmdfile) {
            await message.delete();
            cmdfile.run(Client, message, args);
        }
    }
});