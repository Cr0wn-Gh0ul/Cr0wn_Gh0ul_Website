import React, { Component } from 'react';
import { Button } from 'semantic-ui-react'
import Socket from '../classes/socket.js';
import Api from '../classes/api.js';
import Web3Adapter from '../classes/web3Adapter.js';
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3Modal from "web3modal";

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      infuraId: ""
    }
  }
};

export default class aye extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
    this.start = this.start.bind(this);
    this.connect = this.connect.bind(this);
    this.sign = this.sign.bind(this);
    this.initSocket = this.initSocket.bind(this);
    this.api = new Api();
  }
  state = {
    'socket': false,
    'connected': false,
    'web3Adapter': false,
    'error': false,
  }

  async connect() {
    this.setState({'error': ''});
    const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions
    });

    const provider = await web3Modal.connect();
    if (!provider) {
      this.setState({'error': 'Web3 not connected!'});
      return;
    }
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false;
    }
    let web3Adapter = new Web3Adapter();
    await web3Adapter.connectProvider(provider)
    await this.setState({'web3Adapter': web3Adapter})
    this.sign();
  }

  async sign() {
    this.setState({'error': ''});
    if (!this.state.web3Adapter) {
      return;
    }
    let sigMsg = await this.api.request('sig-message');
    if (!sigMsg || sigMsg.status !== 200 || !sigMsg.data || !sigMsg.data.msg || !sigMsg.data.token) {
      this.setState({'error': sigMsg && sigMsg.response && sigMsg.response.error ? sigMsg.response.error : 'Error, please try again!'})
      return;
    }
    try {
      let currentAddress = await this.state.web3Adapter.web3.eth.getAccounts();
      let sig = await this.state.web3Adapter.web3.eth.personal.sign(sigMsg.data.msg, currentAddress[0]);
      let apiData = {'signature': sig, 'token': sigMsg.data.token};
      let verify = await this.api.request('exchange-signature', apiData);
      if (!verify || verify.status !== 200 || !verify.data || !verify.data.token) {
        this.setState({'error': verify && verify.response && verify.response.error ? verify.response.error : 'Error, please try again!'})
        return;
      }
      this.setState({'socketToken': verify.data.token});
      this.initSocket(verify.data.token);
    } catch(ex) {
      return false;
    }
  }

  async initSocket(token) {
    let socket = new Socket();
    await socket.start(this.state.socketToken ? this.state.socketToken : token);
    this.setState({'socket': socket.socket, 'connected': socket.connected});
    await this.socketRecv();
    this.start()
  }

  socketRecv() {
    this.state.socket.on('test', this.test);
  }

  start() {
    this.state.socket.emit('test', 'est');
  }

  test(data) {
    console.log(data)
  }

  render() {
    let display = !this.state.web3Adapter ?
        (<Button onClick={() => {this.connect()}}>Connect</Button>) :
        !this.state.socketToken ?
          (<Button onClick={() =>{this.sign()}}>Sign</Button>) :
          !this.state.socket ?
            (<Button onClick={() => {this.initSocket()}}>Connect</Button>) :
            (<p>Connected</p>);
    return (
      <>
      {display}
      <p>{this.state.error}</p>
      </>
    )
  }
}
