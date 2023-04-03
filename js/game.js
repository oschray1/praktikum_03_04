var c = document.getElementById("field");
var ctx = c.getContext('2d');

// Size of the canvas and additional variables
const width = 850;
const height = 425;
const halfWidth = width / 2;
const halfHeight = height / 2;
// 1 / 10 of the whole width
const oneTenth = width / 10;

// Code to remove the blurness of the canvas
c.style.width = `${width}px`;
c.style.height = `${height}px`;
const scale = window.devicePixelRatio;
c.width = Math.floor(width * scale);
c.height = Math.floor(height * scale);
ctx.scale(scale, scale);

// General setting for canvas
ctx.strokeStyle = "white";
ctx.fillStyle = "white";





function drawBounds() {
    // Width of line
    const widthOfLine = 5;
    // -------------

    ctx.setLineDash([]);
    ctx.lineWidth = widthOfLine;

    ctx.beginPath();
    ctx.moveTo(oneTenth, widthOfLine / 2);
    ctx.lineTo(oneTenth * 9, widthOfLine / 2);
    ctx.stroke();
    ctx.closePath();

    ctx.beginPath();
    ctx.moveTo(oneTenth, height - (widthOfLine / 2));
    ctx.lineTo(oneTenth * 9, height - (widthOfLine / 2));
    ctx.stroke();
    ctx.closePath();
}

function drawMiddleLine() {
    // Width of line
    ctx.lineWidth = 5;
    // -------------

    ctx.beginPath();
    ctx.moveTo(halfWidth, 0);
    ctx.setLineDash([17, 17]);
    ctx.lineTo(halfWidth, height);
    ctx.stroke();
    ctx.closePath();
}

var keyPressed = 0;

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    keyPressed = e.keyCode;
}

function keyUpHandler(e) {
    keyPressed = 0;
}

class Player {
    constructor(name, height, width, x, y, speed, keyDown, keyUp) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.keyDown = keyDown;
        this.keyUp = keyUp;
    }

    show() {
        ctx.beginPath();
        ctx.rect(this.x + (this.height / 2), this.y + (this.height / 2), this.width, this.height);
        ctx.fill();
        ctx.closePath();
    }
}

var player1 = new Player("Spieler 1", oneTenth / 2, 8, 10, halfHeight, 2.5, 40, 38);


function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    drawBounds();
    drawMiddleLine();

    if (keyPressed == player1.keyDown)
        player1.y += player1.speed;
    else if (keyPressed == player1.keyUp)
        player1.y -= player1.speed;

    player1.show();

    requestAnimationFrame(draw);
}

draw();

