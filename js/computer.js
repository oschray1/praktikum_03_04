class Computer extends Rectangle {
    constructor(x, y) {
        super(x, y, playerHeight, playerWidth)
        this.speed = playerSpeed;
        this.score = 0;
    }

    get Victory() {
        return this.score == winScore;
    }

    moveTo(y) {

        let distance = this.y - y;

        if (Math.abs(distance) < this.speed)
            return;

        if (distance < 0)
            this.y += this.speed;
        else if (distance > 0)
            this.y -= this.speed;
    }

    addRecord() { }

    draw() {
        if (Ball.x > this.halfWidth)
            this.moveTo(Ball.predictY(this.x - Ball.radius));

        super.draw();
    }
}