class Ball {
    static radius = 5;
    static x = halfWidth;
    static y = halfHeight;
    static speedX = -3;
    static speedY = 0;

    static checkCollusion(pl1, pl2) {

        if (Ball.y >= height - lineWidth - Ball.radius
            || // When the ball touches the borders
            Ball.y <= 0 + lineWidth + Ball.radius
        ) {
            // Check on the ball go through the vertical margins of borders 
            if (Ball.x >= Field.horizontalMargin
                &&
                Ball.x <= width - Field.horizontalMargin)
                // Change of the balls vector
                Ball.speedY *= -1;
        }

        if (Ball.x - Ball.radius <= pl1.frontBound && Ball.x - Ball.radius >= pl1.backBound) {
            if (Ball.y <= pl1.upperBound &&
                Ball.y >= pl1.lowerBound) {
                let localY = pl1.upperBound - Ball.y;
                let heightOfBounce = localY / (pl1.height / 2) - 1;
                console.log(heightOfBounce);
                Ball.speedX *= -1;
                Ball.speedY = heightOfBounce * -5 * Math.random();
            }
            else {
                setTimeout(() => {  Ball.newSet(getRandomInt(1, 5), getRandomInt(-5, 5)) }, 1000);
            }
        }

        if (Ball.x + Ball.radius <= pl2.frontBound && Ball.x + Ball.radius >= pl2.backBound) {
            if (Ball.y <= pl2.upperBound &&
                Ball.y >= pl2.lowerBound) {
                let localY = pl2.upperBound - Ball.y;
                let heightOfBounce = localY / (pl2.height / 2) - 1;
                console.log(heightOfBounce);
                Ball.speedX *= -1;
                Ball.speedY = heightOfBounce * -5 * Math.random();
            }
            else {
                setTimeout(() => {  Ball.newSet(getRandomInt(-5, -1), getRandomInt(-5, 5)) }, 1000);
            }
        }


    }

    static newSet(speedX, speedY) {
        Ball.x = halfWidth;
        Ball.y = halfHeight;

        Ball.speedX = speedX;
        Ball.speedY = speedY;
    }

    static show(pl1, pl2) {
        Ball.checkCollusion(pl1, pl2);

        Ball.x += Ball.speedX;
        Ball.y += Ball.speedY;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }
}