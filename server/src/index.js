/* npm */
const bodyParser    = require('body-parser');

/* local */
const Middleware    = require('./expressRoutes/middleware.js')
const cfg           = require('./config/config.js');
const eRoutes       = require('./expressRoutes/routes.js');
const sRoutes       = require('./socketRoutes/routes.js');
const JwtManager    = require('./classes/jwtManager.js');
const jwt = new JwtManager(cfg);

/* Configure Servers */
const socket_server     = cfg.socket_server;
const express_server    = cfg.express_server
const io                = cfg.io;
const port              = cfg.port;

/* Express Middleware */
Middleware.middleware(express_server)

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
    socket.payload = verified.payload;
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
io.on('connection', (socket) => {
  for (let endpoint in sRoutes) {
    if (sRoutes.hasOwnProperty(endpoint)) {
      socket.on(endpoint, (data) => { sRoutes[endpoint](data, socket) });
    }
  }
});

/* Discord */
cfg.discordClient.on('message', async(message) {
   if (message.author.id != '410291034166132736') { return false }

});

/* Start Server */
express_server.listen(cfg.express_port, () => console.log(`Api Ready! Port: ${cfg.express_port}!`));
socket_server.listen(cfg.socket_port, () => console.log(`Socket Ready! Port: ${cfg.socket_port}!`))

