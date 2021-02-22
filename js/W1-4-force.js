"use strict";

//Let's continue with our Bouncing Ball
//Introduce 2 forces: wind and gravity
//Wind is only applied when the mouse is pressed

//Introduce mass
//To check if it works, create 2 instances of your Ball class with different masses.


const w = 800;
const h = 800;
let ball1, ball2;

function setup() {
    createCanvas(w, h);
    background(200);
    ball = new Ball(w/4, h/2, w, h, 10);
    ball2 = new Ball(w/4, h/3, w, h, 20);
}

function draw() {
    background(200);

    if(mouseIsPressed) {
        let wind = createVector(5, 1);
        ball1.applyForce(wind);
        ball2.applyForce(wind);
    }

    let gravity = createVector(0, 3);
    ball1.applyForce(gravity);
    ball2.applyForce(gravity);

    ball1.update();
    ball2.update();

    ball1.draw();
    ball2.draw();
}