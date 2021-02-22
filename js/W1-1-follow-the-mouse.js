"use strict";

//Draw a line which follow your mouse pointer from the center of the screen
//Check https://p5js.org/reference/ on how to access mouse data

const w = 800;
const h = 800;

function setup() {
    createCanvas(w, h);
    background(200);
}

function draw() {
    background(200);


    let m = createVector(mouseX, mouseY);
    let center = createVector(w/2, h/2);

    m.sub(center);

    translate(w/2, h/2);
    line(0, 0, m.x, m.y);

    //console.log(m, center);
    
}