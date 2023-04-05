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
const lineWidth = 5;
ctx.lineWidth = lineWidth;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}