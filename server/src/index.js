/* npm */
const bodyParser    = require('body-parser');

/* local */
const eMiddleware   = require('./routes/middleware.js')
const sMiddleware   = require('./socket/middleware.js')
const cfg           = require('./config/config.js');
const eRoutes       = require('./expressRoutes/routes.js');
const sRoutes       = require('./socketRoutes/routes.js');

/* Configure Server */
const server    = cfg.server;
const io        = cfg.io;
const port      = cfg.port;
const app       = cfg.app;

/* Express Middleware */
eMiddleware.corsMiddleware(app)

/* Api Routes */
for (let endpoint in eRoutes) {
  if (eRoutes.hasOwnProperty(endpoint)) {
    server.post(endpoint, eRoutes[endpoint]);
  }
}

/* Socket Middleware */
io.use((socket, next) => {
  if (socket.handshake.query && socket.handshake.query.gameToken){
    let verified = jwtManager.verify(socket.handshake.query.gameToken);
    if (!verified) {
      socket.emit('error', 'Bad Token');
      return;
    }
    socket.payload = verified.payload;
    next();
  } else {
    socket.emit('error', 'Missing Token');
    return;
  }
}

/* Socket Routes */
io.on('connection', (socket) => {
  for (let endpoint in sRoutes) {
    if (sRoutes.hasOwnProperty(endpoint)) {
      socket.on(endpoint, sRoutes[endpoint]);
    }
  }
}

/* Start Server */
server.listen(cfg.PORT, () => console.log(`Api Ready! Port: ${cfg.PORT}!`));

