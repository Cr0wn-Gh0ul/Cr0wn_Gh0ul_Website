import React, { Component } from 'react';
import { Icon, Table } from 'semantic-ui-react'

import Web3Adapter from '../classes/web3Adapter.js';

export default class EthInfo extends Component {
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
        <Table className="crt" celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'>Ethereum Block Monitor</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>

            <Table.Row>
              <Table.Cell collapsing>
                Block Number
              </Table.Cell>
              <Table.Cell>{this.state.block.number}</Table.Cell>
            </Table.Row>


            <Table.Row>
              <Table.Cell collapsing>
                Hash
              </Table.Cell>
              <Table.Cell>{this.state.block.hash}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                Difficulty
              </Table.Cell>
              <Table.Cell>{this.state.block.difficulty}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                Nonce
              </Table.Cell>
              <Table.Cell>{this.state.block.nonce}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                Gas Used
              </Table.Cell>
              <Table.Cell>{this.state.block.gasUsed}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell collapsing>
                Timestamp
              </Table.Cell>
              <Table.Cell>{this.state.block.timestamp}</Table.Cell>
            </Table.Row>


          </Table.Body>
        </Table>
      )
  }
}
