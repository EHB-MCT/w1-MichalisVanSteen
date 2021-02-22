"use strict";

const w = 800;
const h = 800;

let loc, velocity, acceleration;
let mass = 1;

function setup() {
    createCanvas(w, h);
    loc = createVector(w/2, h/2);
    velocity = createVector(0, 0);
    acceleration = createVector(0, 0);
}

function draw() {
    //update
    let gravity = createVector(0, 0.1);
    applyForce(gravity);

    velocity.add(acceleration);
    location.add(velocity);

    //draw
    background(200);
    stroke(0);
    fill(175);
    circle(loc.x, loc.y, 50);
}

function applyForce(force) {
    let f = force.copy();
    f.div(mass);
    acceleration.add(f);
}