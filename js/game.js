ScoreTable.show();

var pl1 = new Player('Sp 1', playerWidth / 2, halfHeight, 's', 'w');
var pl2 = new Player('Sp 2', width - playerWidth / 2, halfHeight, 'ArrowDown', 'ArrowUp');

var nameInput1 = document.getElementById('name1');
var nameInput2 = document.getElementById('name2');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var startBtn = document.getElementById('start-btn');

startBtn.onclick = (e) => {
    let name1 = nameInput1.value;
    let name2 = nameInput2.value;

    if (name1 && name2) {

        if (name1 == name2) {
            alert('Gebt bitte verschiedene Namen ein.');
            return;
        }

        nameInput1.disabled = true;
        nameInput2.disabled = true;
        nameInput1.setAttribute('class', 'mv-2 disabled');
        nameInput2.setAttribute('class', 'mv-2 disabled');

        pl1.name = name1;
        pl2.name = name2;
        e.target.style.display = 'none';

        draw();
    }
    else {
        alert("Zuerst gebt bitte eure Namen ein.");
        return;
    }
}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    pl1.checkPressedKey(e);
    pl2.checkPressedKey(e);
}

function keyUpHandler(e) {
    pl1.checkLeftKey(e);
    pl2.checkLeftKey(e);
}

function draw() {
    // Clear the whole canvas
    ctx.clearRect(0, 0, c.width, c.height);

    Field.draw();

    pl1.draw();
    pl2.draw();
    Ball.show();

    score1.innerHTML = pl1.score;
    score2.innerHTML = pl2.score;

    if (pl1.score == winScore || pl2.score == 20) {
        startBtn.style.display = 'block';

        nameInput1.disabled = false;
        nameInput2.disabled = false;
        nameInput1.setAttribute('class', 'mv-2 white-border');
        nameInput2.setAttribute('class', 'mv-2 white-border');

        pl1.addRecord();
        pl2.addRecord();

        pl1.score = 0;
        pl2.score = 0;
        score1.innerHTML = 0;
        score2.innerHTML = 0;
        pl1.name = null;
        pl2.name = null;

        ScoreTable.show();
    }
    else requestAnimationFrame(draw);
}