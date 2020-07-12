import React, { useState, useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';
import { Button } from 'semantic-ui-react'

import 'react-chat-widget/lib/styles.css';
import './styles/chat.css';

import SocketManager from '../classes/socket.js';
import Api from '../classes/api.js';

function Chat() {
  let [socket] = useState(false);

  const initSocket = async(token) => {
    let api = new Api();
    let getToken = await api.request('messenger-token');
    if (!getToken || getToken.status !== 200 || !getToken.data || !getToken.data.token) {
        addResponseMessage('Oops! An unexpected error occurred.', 'connectionMsg');
        return false;
    }
    let Socket = new SocketManager();
    await Socket.start(getToken.data.token);

    socket = Socket.socket;
    await socketRecv();
  }

  const socketRecv = () => {
    socket.on('message-reply', recv);
  }

  const recv = (data) => {
    addResponseMessage(data)
  }

  const send = (msg) => {
    socket.emit('messenger', msg);
  }

  const toggler = (e) => {
    console.log('hit')
  }
  const customLauncher = (handleToggle) =>
    (<>
      <Button side="medium" className="launcher" circular icon="discord" onClick={handleToggle}></Button>
    </>)

  useEffect(() => {
    async function startSocket() {
      await initSocket();
    }
    startSocket();
  }, []);

  const handleNewUserMessage = (newMessage) => {
    if (!socket) {
      addResponseMessage('Chat is currently unavailable!', 'connectionMsg');
    }
    send(newMessage);
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Live Chat"
      subtitle="Chat <=> Discord"
      launcher={handleToggle => customLauncher(handleToggle)}
      launcherOpenLabel='chat-active'
    />
  );
}
export default Chat;
