const { Client } = require('../index.js'),
    chalk = require('chalk'),
    settings = require('../settings/settings.json');

Client.on("ready", async () => {

    console.log(chalk.cyan(`============================================`));
    console.log(chalk.cyan(`||             BOT's NAME#TAG             ||`));
    console.log(chalk.cyan(`||         Made by Nektarios#1234         ||`));
    console.log(chalk.cyan(`============================================`));

    await Client.user.setActivity(settings.Status.Message, {type: settings.Status.Type})

});