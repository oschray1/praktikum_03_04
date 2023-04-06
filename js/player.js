const playerSpeed = 4.5;
const playerHeight = 40;
const playerWidth = 7.5;
const winScore = 20;

class Player extends Rectangle {
    constructor(name, x, y, keyDown, keyUp) {
        super(x, y, playerHeight, playerWidth);

        this.name = name;
        this.score = 0;
        this.speed = playerSpeed;
        this.keyDown = keyDown;
        this.keyUp = keyUp;

        this.downPressed = false;
        this.upPressed = false;
    }

    get Victory() {
        return this.score == Player.winScore;
    }

    checkPressedKey(event) {
        if (event.key == this.keyDown) {
            this.downPressed = true;
            this.upPressed = false;
        }
        if (event.key == this.keyUp) {
            this.downPressed = false;
            this.upPressed = true;
        }
    }

    checkLeftKey(event) {
        if (event.key == this.keyDown) {
            this.downPressed = false;
        }
        if (event.key == this.keyUp) {
            this.upPressed = false;
        }
    }

    move() {
        if (this.upPressed && this.y >= this.height / 2)
            this.y -= this.speed;
        else if (this.downPressed && this.y <= height - this.height / 2)
            this.y += this.speed;
    }

    addRecord() {
        if (localStorage && this.Victory) {
            let wins = parseInt(localStorage.getItem(this.name));

            if (wins)
                localStorage.setItem(this.name, wins + 1);
            else
                localStorage.setItem(this.name, 1);
        }
    }

    draw() {
        this.move();    
        super.draw();
    }
}