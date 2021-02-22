"use strict";

//This time we just want a line that points in the direction of mouse,
//The line has a length of 200px;

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

    m.normalize();
    m.mult(200);
    
    //Andere mogelijkheid voor lijn lengte
    //m.setMag(200);

    translate(w/2, h/2);
    line(0, 0, m.x, m.y);

    //console.log(m, center);
}