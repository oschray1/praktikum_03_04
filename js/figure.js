class Rectangle {
    constructor(x, y, height, width) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }

    get upperBound() { return this.y + this.height / 2; }
    get lowerBound() { return this.y - this.height / 2; }
    get frontBound() { return this.x + this.width / 2; }
    get backBound() { return this.x - this.width / 2; }

    get halfWidth() { return this.width / 2; }
    get halfHeight() { return this.height / 2; }

    draw() {
        ctx.fillRect(
            this.x - (this.width / 2),
            this.y - (this.height / 2),
            this.width,
            this.height);
    }
}