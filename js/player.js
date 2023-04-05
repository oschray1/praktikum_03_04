class Player {
    constructor(name, height, width, x, y, speed, keyDown, keyUp) {
        this.name = name;
        this.score = 0;
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.keyDown = keyDown;
        this.keyUp = keyUp;
    }

    get upperBound() { return this.y + this.height / 2 }
    get lowerBound() { return this.y - this.height / 2 }
    get frontBound() { return this.x + this.width / 2}
    get backBound() { return this.x - this.width / 2}

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

    show() {
        if (this.upPressed && this.y >= this.height / 2)
            this.y -= this.speed;
        else if (this.downPressed && this.y <= height - this.height / 2 )
            this.y += this.speed;


        ctx.beginPath();
        ctx.rect(
            this.x - (this.width / 2),
            this.y - (this.height / 2),
            this.width,
            this.height);
        ctx.fill();
        ctx.closePath();
    }
}