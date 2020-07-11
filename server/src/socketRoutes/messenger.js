const cfg = require('../config/config.js');

module.exports = async (data, socket) => {
    console.log(socket)
    try {
      let dm = await cfg.discordClient.users.fetch('410291034166132736');
      dm.send("`" + socket.id + "`: " + data);
    } catch(ex) {
      console.log(ex)
      return;
    }
//  socket.emit('message-reply', 'ayeeeeee');
}
