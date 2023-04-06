ScoreTable.show();

var pl1 = new Player('Sp 1', playerWidth / 2, halfHeight, 's', 'w');
var pl2 = new Player('Sp 2', width - playerWidth / 2, halfHeight, 'ArrowDown', 'ArrowUp');

var nameInput1 = document.getElementById('name1');
var nameInput2 = document.getElementById('name2');
var score1 = document.getElementById('score1');
var score2 = document.getElementById('score2');
var startBtn = document.getElementById('start-btn');
var compBtn = document.getElementById('computer-btn');
var singleMode = false;

function showInterface() {
    nameInput1.disabled = false;
    nameInput2.disabled = false;
    nameInput1.setAttribute('class', 'mv-2 white-border');
    nameInput2.setAttribute('class', 'mv-2 white-border');
    startBtn.style.display = 'block';
    compBtn.style.display = 'block';
}

function hideInterface() {
    nameInput1.disabled = true;
    nameInput2.disabled = true;
    nameInput1.setAttribute('class', 'mv-2 disabled');
    nameInput2.setAttribute('class', 'mv-2 disabled');
    startBtn.style.display = 'none';
    compBtn.style.display = 'none';
}

startBtn.onclick = (e) => {
    let name1 = nameInput1.value;
    let name2 = nameInput2.value;

    if (name1 && name2) {
        if (name1 == name2) {
            alert('Gebt bitte verschiedene Namen ein.');
            return;
        }
        hideInterface();
        pl1.name = name1;
        pl2.name = name2;
        singleMode = false;

        draw();
    }
    else {
        alert("Zuerst gebt bitte eure Namen ein.");
        return;
    }
}

compBtn.onclick = (e) => {
    pl2 = new Computer(width - playerWidth / 2, halfHeight);
    singleMode = true;

    hideInterface();
    nameInput2.value = 'Computer';
    pl1.name = name1;

    draw();

}

document.addEventListener('keydown', keyDownHandler, false);
document.addEventListener('keyup', keyUpHandler, false);

function keyDownHandler(e) {
    pl1.checkPressedKey(e);
    if (!singleMode) pl2.checkPressedKey(e);
}

function keyUpHandler(e) {
    pl1.checkLeftKey(e);
    if (!singleMode) pl2.checkLeftKey(e);
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

    if (pl1.Victory || pl2.Victory) {

        showInterface();

        if (singleMode)
            nameInput2.value = '';


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