const Discord = require('discord.js'),
    Color = require('./getColor.js');

function Error (errorMessage, description, message) {
    let ErrorMessage = new Discord.MessageEmbed()
        .setTitle(errorMessage)
        .setDescription(description)
        .setColor(Color.getColor("red"))
    return message.channel.send(ErrorMessage)
}

module.exports = {
    Error
}