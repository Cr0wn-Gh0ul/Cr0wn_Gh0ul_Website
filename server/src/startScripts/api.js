/* local */
const express_middleware    = require('../expressRoutes/middleware.js')
const cfg                   = require('../config/config.js');
const eRoutes               = require('../expressRoutes/routes.js');

/* Configure Servers */
const express_server    = cfg.express_server

/* Express Middleware */
express_middleware.middleware(express_server);

/* Api Routes */
for (let endpoint in eRoutes) {
  if (eRoutes.hasOwnProperty(endpoint)) {
    express_server.post('/api/' + endpoint, eRoutes[endpoint]);
  }
}

/* Start Server */
express_server.listen(cfg.express_port, () => console.log(`Api Ready! Port: ${cfg.express_port}!`));

