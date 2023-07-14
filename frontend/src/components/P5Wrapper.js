// P5Wrapper.js
import React from 'react';
import Sketch from 'react-p5';

export default function P5Wrapper() {
  let x = 50;
  let y = 50;
  let xspeed = 1;
  let yspeed = 3.3;

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.textFont('Georgia');
    p5.textSize(48);
  };

  const draw = p5 => {
    p5.background(255);
    p5.fill(255, 0, 200, 100);
    p5.text('Welcome to Sprinkle.ai', x, y);
    x += xspeed;
    y += yspeed;
    if (x > p5.width || x < 0) {
      xspeed = -xspeed;
    }
    if (y > p5.height || y < 0) {
      yspeed = -yspeed;
    }
  };

  return <Sketch setup={setup} draw={draw} />;
}
