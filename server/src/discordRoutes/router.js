module.exports = async(discord, io, data) => {
   if (data.author.id != '410291034166132736') { return false }
    let msgArray = data.content.split(' ')
    let cmd = msgArray[0];
    msgArray.shift()
    let msg = msgArray.join(' ');

  switch(cmd) {
    case 'send':
      let socket_id = msgArray[0];
      msgArray.shift();
      let msg = msgArray.join(' ');
      await require('./newMessage.js')(discord, io, socket_id, msg);
      break;
  }
}
