class Computer {
    constructor(height, width, x, y, speed) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.speed = speed;
    }

    get upperBound() { return this.y + this.height / 2; }
    get lowerBound() { return this.y - this.height / 2; }
    get frontBound() { return this.x + this.width / 2; }
    get backBound() { return this.x - this.width / 2; }

    get halfWidth() { return this.width / 2; }
    get halfHeight() { return this.height / 2; }

    moveTo(y) {
        if (this.y < y) this.y += this.speed;
        else if (this.y < y) this.y -= this.speed;
    }

    draw() {
        this.moveTo(Ball.predictY(this.x - Ball.radius));

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