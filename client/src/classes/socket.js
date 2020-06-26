const io = require('socket.io-client');
const socketServer = process.env.REACT_APP_SOCKET ? process.env.REACT_APP_SOCKET : '';

class Socket{
  constructor() {
    this.socket     = false;
    this.connected  = false;
    this.error      = [];
  }

  async start(token) {
    let socket;
    try {
      socket = await io.connect(socketServer, {path: '/socket', query: {'token': token}, reconnection: true, reconnectionDelay: 1000, reconnectionDelayMax : 5000});
    } catch(ex) {
      this.error.push('Could not connect to game server');
      return;
    }

    this.socket = socket;
    this.connected = true;
  }

}

export default Socket;
