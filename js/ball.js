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

    static checkCollusion() {

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

        // Collision with the first player
        if (Ball.backBound <= pl1.frontBound && Ball.backBound >= pl1.backBound) {
            if (Ball.y <= pl1.upperBound &&
                Ball.y >= pl1.lowerBound) {
                // Depend on the position of bounce, the ball becomes
                // the different angle (Steigung) 
                let localY = pl1.upperBound - Ball.y;
                let heightOfBounce = localY / (pl1.height / 2) - 1;
                console.log(heightOfBounce);
                Ball.speedX *= -1.01; // Send the ball backwards
                Ball.speedY = heightOfBounce * getRandomFloat(-10, -3) + getRandomFloat(-2, 2);

                pl2.y = Ball.getYatX(pl2.x);
            }
            else { // Game over
                pl2.score++;
                Ball.x = halfWidth;
                Ball.y = halfHeight;
                Ball.speedX = 0;
                Ball.speedY = 0;
                setTimeout(
                    () => Ball.newSet(2.5, getRandomFloat(-2, 2)),
                    1000);
            }
        }

        // Collision with the second player
        if (Ball.x + Ball.radius <= pl2.frontBound && Ball.x + Ball.radius >= pl2.backBound) {
            if (Ball.y <= pl2.upperBound &&
                Ball.y >= pl2.lowerBound) {
                let localY = pl2.upperBound - Ball.y;
                let heightOfBounce = localY / (pl2.height / 2) - 1;
                console.log(heightOfBounce);
                Ball.speedX *= -1.01;
                Ball.speedY = heightOfBounce * getRandomFloat(-10, -3) + getRandomFloat(-2, 2);

                pl1.y = Ball.getYatX(pl1.x);

            }
            else { // Game over
                pl1.score++;
                Ball.x = halfWidth;
                Ball.y = halfHeight;
                Ball.speedX = 0;
                Ball.speedY = 0;
                setTimeout(
                    () => { Ball.newSet(-2.5, getRandomFloat(-2, 2)) },
                    1000);
            }
        }
    }

    static getYatX(x) {
        let dx = x - Ball.x;
        // How many frames needs the ball to reach the X 
        let frames = dx / Ball.speedX;
        // Y without the walls
        let y1 = Ball.y + (Ball.speedY * frames);
        let y; // Remove the "mirrors"

        let actualHeight = height - lineWidth * 2;
        const numberOfBounces = Math.abs(Math.floor(y1 / actualHeight));

        if (y1 < 0) {
            y = y1 % (actualHeight * -1);
            
            if (numberOfBounces % 2 == 0) 
                y = actualHeight + y;
            else 
                y *= -1;
        }
        else if (y1 <= actualHeight && y1 > lineWidth) {
            y = y1;
        }
        else if (y1 > actualHeight) {
            y = y1 % actualHeight;

            if (numberOfBounces % 2 == 0) 
                y = y;
            else 
                y = actualHeight - y;
        }

        return y;
    }

    static newSet(speedX, speedY) {
        Ball.x = halfWidth;
        Ball.y = halfHeight;

        Ball.speedX = speedX;
        Ball.speedY = speedY;
    }

    static show() {
        Ball.checkCollusion();

        Ball.x += Ball.speedX;
        Ball.y += Ball.speedY;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fill();
        ctx.closePath();
    }
}