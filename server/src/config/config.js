const dotenv = require('dotenv');
dotenv.config();

const { Client } = require('discord.js');
const discord_client = new Client();
discord_client.login(process.env.DISCORD_BOT_KEY);

let express          = require('express')
    , express_server = express()
    , http           = require('http')
    , socket_server  = http.createServer(express_server)
let io = require('socket.io')(socket_server, {
    path: '/socket',
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});


let express_port    = process.env.EXPRESS_PORT ? process.env.EXPRESS_PORT : 5000;
let socket_port     = process.env.SOCKET_PORT ? process.env.SOCKET_PORT : 8000;

let jwt_priv    = process.env.JWT_PRIVATE_KEY ? process.env.JWT_PRIVATE_KEY.replace(/\\n/g, '\n') : false;
let jwt_pub     = process.env.JWT_PUBLIC_KEY ? process.env.JWT_PUBLIC_KEY.replace(/\\n/g, '\n') : false;
let jwt_opts    = {
                    issuer      : process.env.JWT_ISSUER ? process.env.JWT_ISSUER : false,
                    audience    : process.env.JWT_AUDIENCE ? process.env.JWT_AUDIENCE : false,
                    algorithm   : process.env.JWT_ALGORITHM ? process.env.JWT_ALGORITHM : 'RS256',
                    expiresIn   : process.env.JWT_EXP ? process.env.JWT_EXP : '1h'
                  }

let redis_host  = process.env.REDIS_HOST ? process.env.REDIS_HOST : 'localhost';
let redis_port  = process.env.REDIS_PORT ? process.env.REDIS_PORT : 6379;

module.exports = {
  discord_client,
  express_server,
  socket_server,
  io,
  express_port,
  socket_port,
  jwt_priv,
  jwt_pub,
  jwt_opts,
  redis_host,
  redis_port
}
