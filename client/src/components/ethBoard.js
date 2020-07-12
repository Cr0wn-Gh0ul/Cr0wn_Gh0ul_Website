
import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react'

import Web3Adapter from '../classes/web3Adapter.js';

export default class EthGraph extends Component {
  constructor(props) {
    super(props);
    this.newBlocks = this.newBlocks.bind(this);
  }

  state = {
    block: {number: 'Waiting for next block...', hash: '', difficulty: '', nonce: '', timestamp: '', gasUsed: ''}
  }

  componentDidMount() {
    this.web3Adapter = new Web3Adapter('wss://mainnet.infura.io/ws/v3/<KEY>');
    this.web3Adapter.startMonitor(this.newBlocks);
  }

  async newBlocks(block, err) {
    await this.setState({block: block})
    console.log(block)
  }

  render() {
      return (
        <>
        </>
      )
  }
}
