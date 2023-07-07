const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('discord-together-games').setDescription('Voice chat activities & games that you can play while in voice chat!'),
	new SlashCommandBuilder().setName('youtube-together').setDescription('Watch YouTube with your friends in voice chat!'),
	new SlashCommandBuilder().setName('chess').setDescription('Play Chess against a friend in voice chat!'),
	new SlashCommandBuilder().setName('fishing').setDescription('Fishing! You need to be in voice chat to play this game.'),
	new SlashCommandBuilder().setName('betrayal').setDescription('Similar to Among Us'),
	new SlashCommandBuilder().setName('poker').setDescription('Play with up to 7 people or with bots'),
	new SlashCommandBuilder().setName('doodlecrew').setDescription('A drawing and guessing game'),
	new SlashCommandBuilder().setName('lettertile').setDescription('A word game in which two to four players score points by placing tiles'),
	new SlashCommandBuilder().setName('wordsnack').setDescription('A very simple and exciting game where you have to match the letters to form words.'),
	new SlashCommandBuilder().setName('connect4').setDescription('Play against a friend! @ whom you’d like to play against or play against the A.I! ').addUserOption(option => option.setName('opponent')
		.setDescription('The input to echo back')),
	new SlashCommandBuilder().setName('fight').setDescription('Fight someone! @ whom you’d like to fight').addUserOption(option => option.setName('opponent')
		.setDescription('The input to echo back')),
	new SlashCommandBuilder().setName('chaos').setDescription('Words Find the hidden words in the sentences!'),
	new SlashCommandBuilder().setName('rock-paper-scissors').setDescription('@ the person, you’d like to play against!').addUserOption(option => option.setName('opponent')
		.setDescription('The input to echo back')
	),
	new SlashCommandBuilder().setName('tictactoe').setDescription('@ the person, you’d like to play against or play against the A.I').addUserOption(option => option.setName('opponent')
		.setDescription('The input to echo back')
	),
	new SlashCommandBuilder().setName('uno').setDescription('Play with friends or against the A.I').addStringOption(option =>
		option.setName('stack')
			.setDescription('(Optional) whether you want +2 cards to be stackable. On by default.')
			.addChoice('On', 'On')
			.addChoice('Off', 'Off')).addStringOption(option =>
				option.setName('drawskip')
					.setDescription('(Optional) whether you want to skip the recipient of a +2 or +4 card. On by default.')
					.addChoice('On', 'On')
					.addChoice('Off', 'Off')).addStringOption(option =>
						option.setName('pass')
							.setDescription('(Optional) whether you want ‘passaround’ card in your deck. On by default.')
							.addChoice('On', 'On')
							.addChoice('Off', 'Off')),
	new SlashCommandBuilder().setName('settings').setDescription(`Customize Coco Setting on this server.`),
	new SlashCommandBuilder().setName('score').setDescription('Get detailed info about your positions in server scoreboard'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);