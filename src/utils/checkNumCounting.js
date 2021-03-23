const { Client } = require('../index.js'),
    math = require('mathjs'),
    { Error } = require('./Error.js');

function addNew(message, number) {

    if (!Client.pastNumbers.has(message.guild.id) && parseFloat(number) !== 1.0) {
        Error(`Wrong number`, `Start from 1...`, message);
        return;
    }

    Client.pastNumbers.set(message.guild.id, [parseFloat(number), message.author.id]);
    message.react('🆗').then(r => {
        return;
    });

}

function checkNumber(message) {

    let number = doMath(message.content);

    if (!Client.pastNumbers.get(message.guild.id)) {
        return addNew(message, number);
    }
    if (Client.pastNumbers.get(message.guild.id)[1] === message.author.id) {
        return Error(`Two messages in a row`, `I honestly get it if you dont have any friends but you cant play on your own.`, message)
    } else if (Client.pastNumbers.get(message.guild.id)[0] === parseFloat(number) -1) {
        return addNew(message, number);
    } else {
        Error(`Wrong number`, `${message.author.username} learn how to count bro...\nYou just ruined <@${Client.pastNumbers.get(message.guild.id)[1]}>' high score of ${Client.pastNumbers.get(message.guild.id)[0]}.`, message);
        Client.pastNumbers.delete(message.guild.id);
        return;
    }

}

function doMath(equation) {

    return math.evaluate(equation);

}

module.exports = {
    checkNumber
}