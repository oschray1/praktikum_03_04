class Ball {
    static radius = 5;
    static x = halfWidth;
    static y = halfHeight;
    static speedX = -3;
    static speedY = 0;

    static get upperBound() { return Ball.y + Ball.radius; }
    static get lowerBound() { return Ball.y - Ball.radius; }
    static get frontBound() { return Ball.x + Ball.radius; }
    static get backBound() { return Ball.x - Ball.radius; }

    static checkOutOfField() {
        if (Ball.x <= 0 || Ball.x >= width) {

            let directionX;

            if (Ball.x <= 0) {
                directionX = 1;
                pl2.score++;
            }
            else if (Ball.x >= width) {
                directionX = -1;
                pl1.score++;
            }

            Ball.newSet(0, 0);

            setTimeout(
                () => { Ball.newSet(directionX * 2.5, getRandomFloat(-2, 2)) },
                1000);
        }
    }

    static checkCollusion() {

        if (Ball.y >= height - lineWidth - Ball.radius
            || // When the ball touches the borders
            Ball.y <= 0 + lineWidth + Ball.radius
        ) {
            // Check on the ball go through the vertical margins of borders 
            if (Ball.x >= Field.horizontalMargin - Ball.radius
                &&
                Ball.x <= width - Field.horizontalMargin + Ball.radius)
                // Change of the balls vector
                Ball.speedY *= -1;
        }


        [pl1, pl2].forEach(pl => {
            let distX = Math.abs(Ball.x - pl.x);
            let distY = Math.abs(Ball.y - pl.y);

            if (distX <= pl.halfWidth + Ball.radius) {
                if (distY <= pl.halfHeight + Ball.radius) {
                    const collisionZone = pl.height + Ball.radius * 2;
                    let localY = pl.upperBound + Ball.radius - Ball.y;
                    let bounceAngle = (localY / collisionZone) - 0.5;
                    console.log(bounceAngle);

                    Ball.speedX *= -1.01;
                    Ball.speedY = Math.abs(Ball.speedX) * bounceAngle * -1.5;

                    if (pl.name == pl1.name)
                        pl2.y = Ball.predictY(pl2.x)
                    else
                        pl1.y = Ball.predictY(pl1.x)
                }
                else {

                }
            }
        });
    }

    static predictY(x) {
        const dx = x - Ball.x;
        // How many frames needs the ball to reach the X 
        const frames = dx / Ball.speedX;
        // Y without the walls
        let y1 = Ball.y + (Ball.speedY * frames);
        let y; // Remove the "mirrors"

        const actualHeight = height - lineWidth * 2;

        y = Math.abs(y1) % actualHeight;

        const countOfBounces = Math.abs(y1) / actualHeight;

        if (y1 < actualHeight)
            return y;

        if (countOfBounces % 2 != 0)
            y = actualHeight - y;
        else return y;
    }

    static newSet(speedX, speedY) {
        Ball.x = halfWidth;
        Ball.y = halfHeight;

        Ball.speedX = speedX;
        Ball.speedY = speedY;
    }

    static show() {
        Ball.checkOutOfField();
        Ball.checkCollusion();

        Ball.x += Ball.speedX;
        Ball.y += Ball.speedY;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }
}