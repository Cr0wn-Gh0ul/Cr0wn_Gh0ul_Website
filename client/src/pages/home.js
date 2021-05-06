import React, { Component } from 'react';
import { Header, Container, Image, Icon, Grid, Menu, Segment } from 'semantic-ui-react'
import Cr0wn from '../images/Cr0wn_Gh0ul.png';

import Info from '../components/info.js';
import Work from '../components/work.js';
import Archive from '../components/archive.js';
import Skills from '../components/skills.js';

import Chat from '../components/chat.js';
import C64 from '../components/c64.js';
import EthMonitor from '../components/ethMonitor.js';

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    activeItem: 'about',
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name.toLowerCase()});
  }

  menuRender = (selection) => {
      switch (selection) {
        case 'about':
          return (<Info/>);
        case 'work':
          return (<Work/>);
        case 'archive':
          return (<Archive/>);
        case 'skills':
          return (<Skills/>);
        default:
          return (<></>);
      }
    }

  render() {
    const { activeItem } = this.state

    return (
      <>
      <Chat/>
        <C64/>
      <Grid>
        <Grid.Row className="" verticalAlign='middle' columns={1}>
          <Grid.Column md={4}>
            <Image src={Cr0wn} size='small' centered />
          </Grid.Column>
        </Grid.Row>
          <Grid.Column width={4} className="menu-left">
            <Menu fluid vertical tabular>
              <Menu.Item
                name='About'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Work'
                active={activeItem === 'work'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Skills'
                active={activeItem === 'skills'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                name='Archive'
                active={activeItem === 'archive'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>
          <Grid.Column stretched width={12} className="menu-right">
            <Segment className="crt">
              {this.menuRender(this.state.activeItem)}
            </Segment>
          </Grid.Column>
          <Grid.Row centered columns={1}>
            <Grid.Column>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}
