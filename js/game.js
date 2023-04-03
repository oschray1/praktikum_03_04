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

function drawBounds() {
    // Width of line
    ctx.lineWidth = 5;
    // -------------

    ctx.setLineDash([]);

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

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    drawBounds();
    drawMiddleLine();

    requestAnimationFrame(draw);
}

draw();

