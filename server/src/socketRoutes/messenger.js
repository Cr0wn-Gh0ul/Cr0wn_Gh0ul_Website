const cfg = require('../config/config.js');

module.exports = async (data, socket) => {
    try {
      let dm = await cfg.discord_client.users.fetch('410291034166132736');
      dm.send("`" + socket.id + "`: " + data);
    } catch(ex) {
      console.log(ex)
      return;
    }
}
