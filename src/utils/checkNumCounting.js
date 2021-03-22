const { Client } = require('../index.js');

function addNew(message) {

    if (!Client.pastNumbers.has(message.guild.id) && parseFloat(message.content) !== 1.0) {
        message.channel.send(`Start from 1...`);
        return;
    }

    Client.pastNumbers.set(message.guild.id, [parseFloat(message.content), message.author.id]);
    message.react('🆗').then(r => {
        return;
    });

}

function checkNumber(message) {

    if (!Client.pastNumbers.get(message.guild.id)) {
        return addNew(message);
    }
    if (Client.pastNumbers.get(message.guild.id)[1] === message.author.id) {
        return message.channel.send(`I honestly get it if you dont have any friends but you cant play on your own.`)
    } else if (Client.pastNumbers.get(message.guild.id)[0] === parseFloat(message.content) -1) {
        return addNew(message);
    } else {
        message.channel.send(`${message.author.username} learn how to count bro...`);
        Client.pastNumbers.delete(message.guild.id);
        return;
    }

}

module.exports = {
    checkNumber
}