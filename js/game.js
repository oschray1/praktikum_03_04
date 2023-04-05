document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

const playerSpeed = 4.5;
const playerHeight = oneTenth / 2;
const playerWidth = 7.5;

var player1 = new Player(prompt("Enter the name of the first player: "), playerHeight, playerWidth, 7 / 2, halfHeight, playerSpeed, 's', 'w');
var player2 = new Player(prompt("Enter the name of the second player: "), playerHeight, playerWidth, width - 7 / 2, halfHeight, playerSpeed, 'ArrowDown', 'ArrowUp');

document.getElementById('name1').innerHTML = player1.name;
document.getElementById('name2').innerHTML = player2.name;

function keyDownHandler(e) {
    player1.checkPressedKey(e);
    player2.checkPressedKey(e);
}

function keyUpHandler(e) {
    player1.checkLeftKey(e);
    player2.checkLeftKey(e);
}

function draw() {
    // Clear the whole canvas
    ctx.clearRect(0, 0, c.width, c.height);

    Field.draw();

    player1.show();
    player2.show();
    Ball.show(player1, player2);

    requestAnimationFrame(draw);
}

draw();

