/* local */
const cfg           = require('../config/config.js');
const sRoutes       = require('../socketRoutes/routes.js');
const JwtManager    = require('../classes/jwtManager.js');
const jwt           = new JwtManager(cfg);

/* Configure Servers */
const socket_server     = cfg.socket_server;
const io                = cfg.io;

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
  sRoutes['newConnection'](socket);
  socket.on('disconnect', () => { sRoutes['disconnected'](socket) });
  for (let endpoint in sRoutes) {
    if (sRoutes.hasOwnProperty(endpoint)) {
      socket.on(endpoint, (data) => { sRoutes[endpoint](data, socket) });
    }
  }
});

/* Start Server */
socket_server.listen(cfg.socket_port, () => console.log(`Socket Ready! Port: ${cfg.socket_port}!`))

