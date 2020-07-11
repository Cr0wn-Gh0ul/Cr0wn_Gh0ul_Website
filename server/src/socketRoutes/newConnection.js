const cfg = require('../config/config.js');

module.exports = async (socket) => {
    if (!socket || !socket.payload || !socket.payload.messenger || !socket.id) { return false }
    try {
      let dm = await cfg.discord_client.users.fetch('410291034166132736');
      dm.send("`" + socket.id + "` : Connected!");
    } catch(ex) {
      console.log(ex)
      return;
    }
}
