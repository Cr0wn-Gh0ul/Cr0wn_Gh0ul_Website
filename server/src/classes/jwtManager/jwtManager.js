// Require
const jwt = require('jsonwebtoken');

export default class jwtManager {
  constructor(cfg) {
    this.publicKey = cfg.jwt_pub;
    this.privateKey = cfg.jwt_priv;
    this.opts = cfg.jwt_opts;
  }

  sign(payload) {
    if (!payload) { return false }
    try {
      let token = jwt.sign(payload, this.privateKey, this.opts);
      return token;
    } catch(ex) {
      return false;
    }
  }

  verify(token) {
    if (!token) { return false }
    try {
      let payload = jwt.verify(token, this.publicKey, this.opts);
      return payload;
    } catch(ex) {
      return false;
    }
  }

}
