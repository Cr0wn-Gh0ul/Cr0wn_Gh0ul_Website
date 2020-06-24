/* npm */
const express       = require('express');
const server        = express();
const bodyParser    = require('body-parser');

/* local */
const cfg    = require('./config.js');
const routes = require('./routes.js');


/* Middleware */
server.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

/* Build Routes */
for (let endpoint in routes) {
  if (api.hasOwnProperty(endpoint)) {
    server.post(endpoint, routes[endpoint]);
  }
}


/* Start Server */
server.listen(cfg.PORT, () => console.log(`Api Ready! Port: ${cfg.PORT}!`));

