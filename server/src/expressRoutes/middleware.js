const bodyParser    = require('body-parser');

const cfg           = require('../config/config.js')
const JwtManager    = require('../classes/jwtManager/jwtManager.js')
const Redis         = require('../classes/redis/redis.js')
const response      = require('../utils/response.js')

const jwtManager    = new JwtManager(cfg)
const redis         = new Redis(cfg);

// Cors Middleware
function corsMiddleware(app) {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());
  app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
//    next();
  });
  app.use(function(req,res,next) {
    res.locals.response = response;
    res.locals.redis = redis;
    res.locals.jwt = jwtManager;
  });
}

module.exports = {
  corsMiddleware    : function(app) {corsMiddleware(app)},
}
