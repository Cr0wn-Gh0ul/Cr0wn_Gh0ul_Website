const cfg           = require('../config/config.js');
const discordRouter = require('../discordRoutes/router.js');

/* Configure Servers */
const discord           = cfg.discord_client;

/* Discord */
discord.on('message', (message) => {
  discordRouter(discord, io, message);
});

