import React, { Component } from 'react';
import { Container, Image, Grid, Menu, Segment } from 'semantic-ui-react'
import './App.css';
import './crt.css';
import Cr0wn from './images/Cr0wn_Gh0ul.png';

import Info from './components/info.js';
import Work from './components/work.js';
import Misc from './components/misc.js';
import EthInfo from './components/ethInfo.js';

const p5 = require('p5');

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.c64 = React.createRef();
  }

  state = {
    activeItem: 'about',
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name.toLowerCase()});
  }

  getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 14)];
    }
    return color;
  }

  Sketch = (p) => {
    let w = 15.25;
    let h = 9.25;
    let index = 0;

    p.setup = () => {
      p.createCanvas(window.innerWidth, 226);
      p.background("#0000ff");
      p.strokeWeight(3);
      p.stroke(224);
      p.smooth();
      p.frameRate(10)
    }

    p.draw = () => {
      let x1 = w * index;
      let x2 = x1 + w;
      let y1 = h * 23;
      let y2 = h * 24;
      if (p.random(2) < 1) {
        p.line(x2, y1, x1, y2);
      } else {
        p.line(x1, y1, x2, y2);
      }
      index++;
      if (index == p.width / w || index > p.width / w) {
        let q = p.get(0, h, p.width, h * 23);
        p.background(this.getRandomColor());
        p.set(0, 0, q);
        index = 0;
      }
    }
  }

  componentDidMount() {
    this.myP5 = new p5(this.Sketch, this.c64.current)
  }

  menuRender = (selection) => {
      switch (selection) {
        case 'about':
          return (<Info/>);
          break;
        case 'work':
          return (<Work/>);
          break;
        case 'misc':
          return (<Misc/>);
          break;
        default:
          return (<></>);
          break;
      }
    }

  render() {
    const { activeItem } = this.state

    return (
      <>
      <div className="bg crt" ref={this.c64}></div>
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
                name='Misc'
                active={activeItem === 'misc'}
                onClick={this.handleItemClick}
              />
            </Menu>
          </Grid.Column>

          <Grid.Column stretched width={12} className="menu-right">
            <Segment className="crt">
              {this.menuRender(this.state.activeItem)}
            </Segment>
          </Grid.Column>
        </Grid>
        <Grid>
          <Grid.Row centered columns={1}>
            <Grid.Column md={6}>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </>
    )
  }
}

