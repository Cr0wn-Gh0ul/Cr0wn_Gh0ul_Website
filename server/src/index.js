/* local */
const express_middleware    = require('./expressRoutes/middleware.js')
const cfg                   = require('./config/config.js');
const eRoutes               = require('./expressRoutes/routes.js');
const sRoutes               = require('./socketRoutes/routes.js');
const discordRouter         = require('./discordRoutes/router.js');
const JwtManager            = require('./classes/jwtManager.js');
const jwt                   = new JwtManager(cfg);

/* Configure Servers */
const socket_server     = cfg.socket_server;
const express_server    = cfg.express_server
const io                = cfg.io;
const discord           = cfg.discord_client;

/* Express Middleware */
express_middleware.middleware(express_server)

/* Api Routes */
for (let endpoint in eRoutes) {
  if (eRoutes.hasOwnProperty(endpoint)) {
    express_server.post('/api/' + endpoint, eRoutes[endpoint]);
  }
}

/* Socket Middleware */
io.use((socket, next) => {
  if (socket.handshake.query && socket.handshake.query.token) {
    let verified = jwt.verify(socket.handshake.query.token);
    if (!verified) {
      try {
        socket.emit('err', 'Bad Token');
        return;
      } catch(ex) {
        console.log(ex)
      }
    }
    socket.payload = verified;
    next();
  } else {
    try {
      socket.emit('err', 'Missing Token');
    } catch(ex) {
      return;
    }
    return;
  }
});

/* Socket Routes */
io.on('connect', (socket) => {
//  sRoutes['newConnection'](socket);
//  socket.on('disconnect', () => { sRoutes['disconnected'](socket) });
  for (let endpoint in sRoutes) {
    if (sRoutes.hasOwnProperty(endpoint)) {
      socket.on(endpoint, (data) => { sRoutes[endpoint](data, socket) });
    }
  }
});

/* Discord */
discord.on('message', (message) => {
  discordRouter(discord, io, message);
});

/* Start Server */
express_server.listen(cfg.express_port, () => console.log(`Api Ready! Port: ${cfg.express_port}!`));
socket_server.listen(cfg.socket_port, () => console.log(`Socket Ready! Port: ${cfg.socket_port}!`))

