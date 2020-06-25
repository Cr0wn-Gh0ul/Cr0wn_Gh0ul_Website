const redis       = require('redis');
const uuidv4      = require('uuid/v4');
const {promisify} = require('util');

export default class RedisController {
  constructor(cfg) {
    this.keystore = redis.createClient({
        host: cfg.redis_host || 'localhost',
        port: cfg.redis_port || 6379
    });
  }

  async get(key) {
    try {
      let getKey = promisify(this.keystore.get).bind(this.keystore);
      let value = await getKey(key);
      return value;
    } catch(ex) {
      return false;
    }
  }

  async store(val, key, exp) {
    try {
      if (!key) { key = uuidv4() }
      if (!exp) { exp = 900}
      this.keystore.set(key, val, 'EX', exp);
    } catch(ex) {
      return false;
    }
    return key;
  }

  async del(key) {
    try {
      this.keystore.del(key);
      return true;
    } catch(ex) {
      return false;
    }
  }
}
