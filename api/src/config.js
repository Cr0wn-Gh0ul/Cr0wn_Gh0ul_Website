const dotenv = require('dotenv');
dotenv.config();

let port = process.env.PORT ? process.env.PORT : 5000;

module.exports = {
  port
}
