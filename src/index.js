/*
    Discord Bot for Tryhard Counting - Developed by Nektarios#1234
    http://nektarios.wtf/
    https://github.com/Nektarios/
*/

/* Importing discord.js and creating the Client */
const Discord = require('discord.js');
const Client = new Discord.Client;

/* Import setting files */
const secret = require('./settings/secret.json');
const setup = require('./handlers/setup.js');

/* Create commands collection */
Client.commands = new Discord.Collection();

/* Create the pastNumber Map for the previous number to be stored */
Client.pastNumbers = new Map();

/* Run the setup (Command && Event handler) */
setup.setup(Client);

/* Export the Client */
module.exports.Client = Client;

/* Run the Client, if (error) it will log it */
Client.login(secret.token);