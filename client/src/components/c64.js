import React, { Component } from 'react';
const p5 = require('p5');

export default class C64 extends Component {
  constructor(props) {
    super(props);
    this.c64 = React.createRef();
  }
  state = {
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
      if (index === p.width / w || index > p.width / w) {
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


  render() {
      return (
        <>
          <div className="bg crt" ref={this.c64}></div>
        </>
      )
  }
}
