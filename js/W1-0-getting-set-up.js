"use strict";

//This how you used to code a bouncing ball
//Now rewrite this sketch so it uses vectors.

const w = 800;
const h = 800;

let x = w/2;
let y = h/2;
let xSpeed = 5;
let ySpeed = 3;

Vector location;
Vector velocity;

class PVector {
  float x;
  float y;

  PVector(float x_, float y_) {
    x = x_;
    y = y_;
  }

  void add(PVector v) {
    y = y + v.y;
    x = x + v.x;
  }

}

function setup() {
    createCanvas(w, h);
    background(200);

    location = PVector location = new PVector(100,100);
    velocity = PVector velocity = new PVector(5,3);
}

function draw() {
    background(200);

    location.add(velocity);
    if ((location.x > width) || location.x < 0)) {
      velocity.x = velocity.x * -1;
    }
    if ((location.y > height) || location.y < 0)) {
      velocity.y = velocity.y * -1;
    }

    ellipse(location.x, location.y, 16, 16);

    //Update
    edges();
    x += xSpeed;
    y += ySpeed;

    //Draw
    stroke(0);
    fill(175);
    circle(x,y,50);
}

function edges() {
    if ((x > w) || (x < 0)) {
        xSpeed = xSpeed * -1;
      }
      if ((y > h) || (y < 0)) {
        ySpeed = ySpeed * -1;
      }
    
}