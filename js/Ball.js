"use strict";

class Ball {
    constructor(x, y, w, h, mass) {
        this.location = createVector(x, y);
        this.velocity = createVector(1, 1);
        this.acceleration = createVector(0, 0);
        this.w = w;
        this.h = h;
        this.mass = mass;
    }

    draw() {
        stroke(0);
        fill(175);
        circle(this.location.x, this.location.y, this.mass * 2);
    }

    update() {
        /*let mouse = createVector(mouseX, mouseY);
        mouse.sub(this.location.x, this.location.y);
        this.acceleration = mouse;
        this.acceleration.normalize();
        this.acceleration.mult(1);*/
        this.edges();

        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
    }

    applyForce(force) {
        let f = force.copy();
        f.div(this.mass);
        this.acceleration.add(f);
    }

    edges() {
        /*if(this.location.x > this.w) {
            this.location.x = this.w;
            this.velocity.x = this.velocity.x * -1;
        }else if (this.location.x < 0) {
            this.location.x = 0;
            this.velocity.x = this.velocity.x * -1;
        }
        if(this.location.y > this.h) {
            this.location.y = this.h;
            this.velocity.y = this.velocity * -1;
        }*/

        if ((this.location.x > this.w) || (this.location.x < 0)) {
            this.velocity.x = this.velocity.x * -1;
          }
          if ((this.location.y > this.h) || (this.location.y < 0)) {
            this.velocity.y = this.velocity.y * -1;
          }
    }
}