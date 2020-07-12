import React, { Component } from 'react';
import { Grid, Icon, Table } from 'semantic-ui-react'

import './styles/neon.css';

import Web3Adapter from '../classes/web3Adapter.js';


export default class EthGraph extends Component {
  constructor(props) {
    super(props);
    this.newBlocks  = this.newBlocks.bind(this);
  }

  state = {
    block: {number: 'Waiting for next block...', hash: '', difficulty: '', nonce: '', timestamp: '', gasUsed: ''}
  }

  componentDidMount() {
    this.web3Adapter = new Web3Adapter('wss://mainnet.infura.io/ws/v3/abf9bb91d63b48df90beaf8a6dc11915');
    this.web3Adapter.startMonitor(this.newBlocks);
  }

  async newBlocks(block, err) {
    await this.setState({block: block})
  }

  render() {
      return (
        <>
            <h1 className="neonH1">Ethereum Monitor</h1>
              <p className="neonP">{this.state.block.number !== 'Waiting for next block...' ? 'Block: ' + this.state.block.number : this.state.block.number}</p>
              <p className="neonP">{this.state.block.hash ? 'Hash: ' + this.state.block.hash.substring(0,6) + '...' + this.state.block.hash.substring(62) : ''}</p>
              <p className="neonP">{this.state.block.nonce ? 'Nonce: ' + this.state.block.nonce : ''}</p>
              <p className="neonP">{this.state.block.difficulty ? 'Difficulty: ' + this.state.block.difficulty : ''}</p>
              <p className="neonP">{this.state.block.timestamp ? 'Timestamp: ' + this.state.block.timestamp : ''}</p>
        </>
      )
  }
}
