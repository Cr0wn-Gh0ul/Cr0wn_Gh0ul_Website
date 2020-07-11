const Web3 = require("web3");

class EthWssMonitor {
  constructor(provider) {
    this.provider = provider;
    this.web3 = false;
  }

  async connectProvider(provider) {
    try {
      this.web3 = new Web3(provider);
    } catch(ex) {
      return false;
    }
    return true;
  }

  async connect() {
    if (!this.provider) { return false }
    try {
      this.web3 = new Web3(
        new Web3.providers.WebsocketProvider(this.provider)
      );
    } catch(ex) {
      return false;
    }
    return true;
  }

  async startMonitor(cb) {
    if (!cb) {return false}
    if (!this.web3) {
      let connect = await this.connect();
      if (!connect) {return false}
    }
    try {
      this.web3.eth.subscribe('newBlockHeaders', function(err, block) {
        if (!err) {
          cb.call(this, block)
        }
      });
     } catch(ex) {
      return false;
    }
  }
}
export default EthWssMonitor;
