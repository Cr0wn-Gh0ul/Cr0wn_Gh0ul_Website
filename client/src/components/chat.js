import React, { Component, useState, useEffect } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';

import SocketManager from '../classes/socket.js';
import Api from '../classes/api.js';

function Chat() {
  let [socket, connected] = useState(false);

  const initSocket = async(token) => {
    let api = new Api();
    let getToken = await api.request('messenger-token');
    if (!getToken || getToken.status !== 200 || !getToken.data || !getToken.data.token) {
        addResponseMessage('Oops! An unexpected error occurred');
        return false;
    }
    let Socket = new SocketManager();
    await Socket.start(getToken.data.token);

    socket = Socket.socket;
    connected = Socket.connected;
    await socketRecv();
  }

  const socketRecv = () => {
    socket.on('message-reply', recv);
  }

  const recv = (data) => {
    console.log(data)
  }

  const send = (msg) => {
console.log(socket)
    socket.emit('messenger', msg);
  }

  useEffect(async() => {
    await initSocket();
  }, []);

  const handleNewUserMessage = (newMessage) => {
    if (!socket) {
      addResponseMessage('Chat is currently unavailable!');
    }
    console.log(`New message incoming! ${newMessage}`);
    send(newMessage);
  };

  return (
    <Widget
      handleNewUserMessage={handleNewUserMessage}
      title="Live Chat"
      subtitle="Chat <=> Discord"
    />
  );
}
export default Chat;
