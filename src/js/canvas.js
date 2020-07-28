import React, { Component, useEffect } from "react";

let balls = [];
let canvas;
let ctx;
let width, height;
window.addEventListener("resize", () => {
    width = window.screen.width;
    height = window.screen.height;
});

const mouse = {
    x: undefined,
    y: undefined,
};

function mousemove(e) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
}

class Ball extends Component {
    constructor(x, y, r, dx, dy) {
        super();
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = dx;
        this.dy = dy;
        this.color = "grey";
    }

    createBall() {
        // console.log(width);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI, true);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    collision() {
        if (this.y + this.r >= height || this.y - this.r <= 0) {
            this.dy *= -1;
        }
        if (this.x + this.r >= width || this.x - this.r <= 0) {
            this.dx *= -1;
        }
        if (
            mouse.x - this.x < 50 &&
            mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 &&
            mouse.y - this.y > -50
        ) {
            this.color = "#DDDDDD";
            if (this.r <= 10) {
                this.r++;
            }
        } else {
            this.color = "grey";
            if (this.r >= 3) {
                this.r--;
            }
        }
    }
    moveBall() {
        this.x += this.dx;
        this.y += this.dy;
        this.collision();
        this.createBall();
    }
}

function Canvas() {
    const ref = React.createRef();
    useEffect(() => {
        canvas = ref.current;
        ctx = canvas.getContext("2d");
        canvas.addEventListener("mousemove", (e) => mousemove(e));
        canvas.addEventListener("mouseleave", () => mousemove(-5));

        function resize() {
            ctx.canvas.width = window.innerWidth;
            ctx.canvas.height = window.innerHeight + window.innerHeight / 5;
            width = window.screen.width;
            height = window.screen.height;
            // if (window.screen.width <= 760) {
            //     ctx.canvas.height = 768;
            // }
        }

        function pythagorean(x1, y1, x2, y2) {
            let xDistance = x2 - x1;
            let yDistance = y2 - y1;

            return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
        }

        function init() {
            var r, ballCount, d;
            r = 2;
            if (width <= 299) {
                ballCount = 100;
                d = [-0.05, 0.05];
            } else if (width <= 300) {
                ballCount = 350;
                d = [-0.05, 0.05];
            } else if (width <= 375) {
                ballCount = 400;
                d = [-0.07, 0.06];
            } else if (width <= 425) {
                ballCount = 450;
                d = [-0.07, 0.07];
            } else if (width <= 525) {
                ballCount = 500;
                d = [-0.08, 0.08];
            } else if (width <= 625) {
                ballCount = 750;
                d = [-0.08, 0.08];
            } else if (width <= 768) {
                ballCount = 950;
                d = [-0.09, 0.09];
            } else {
                ballCount = 1000;
                d = [-0.09, 0.09];
            }
            for (let i = 0; i < ballCount; i++) {
                var x = Math.random() * (width - r * 2) + r;
                var y = Math.random() * (height - r * 2) + r;
                var dx = Math.round(Math.random());
                var dy = Math.round(Math.random());
                if (i > 0) {
                    for (let b = 0; b < balls.length; b++) {
                        if (
                            pythagorean(x, y, balls[b].x, balls[b].y) <
                            (r + 5) * 2
                        ) {
                            x = Math.random() * (canvas.width - r * 2) + r;
                            y = Math.random() * (canvas.height - r * 2) + r;

                            b = -1;
                        }
                    }
                }
                balls.push(
                    new Ball(
                        x,
                        y,
                        r,
                        d[dx] * (Math.random() - 0.01),
                        d[dy] * (Math.random() - 0.01)
                    )
                );
            }
        }
        function animate() {
            requestAnimationFrame(animate);
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            balls.map((ball) => ball.moveBall());
        }
        function again() {
            balls = [];
            resize();
            init();
            animate();
        }
        again();
        window.addEventListener("resize", again);

        //     return () => window.removeEventListener("onresize", again);
    });
    return <canvas ref={ref} />;
}
export default Canvas;
