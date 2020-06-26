const bodyParser    = require('body-parser');

const cfg           = require('../config/config.js')
const JwtManager    = require('../classes/jwtManager.js')
const Redis         = require('../classes/redis.js')
const response      = require('../utils/response.js')

const jwtManager    = new JwtManager(cfg)
const redis         = new Redis(cfg);

function middleware(app) {
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json());
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.locals.response = response;
    res.locals.redis = redis;
    res.locals.jwt = jwtManager;
    next();
  });
}

module.exports = {
  middleware    : function(app) {middleware(app)},
}
