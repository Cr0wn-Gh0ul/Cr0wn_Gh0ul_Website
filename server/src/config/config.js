const dotenv = require('dotenv');
dotenv.config();

let express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
let io = require('socket.io')(server, {
    path: '/socket',
    serveClient: false,
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
});

let port        = process.env.PORT ? process.env.PORT : 5000;

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
  app,
  server,
  io,
  port,
  jwt_priv,
  jwt_pub,
  jwt_opts,
  redis_host,
  redis_port
}
