class Field {
    static horizontalMargin = 7.5;

    static draw() {
        ctx.setLineDash([]);
        ctx.lineWidth = lineWidth;

        ctx.beginPath();
        ctx.moveTo(this.horizontalMargin, lineWidth / 2);
        ctx.lineTo(width - this.horizontalMargin, lineWidth / 2);
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(this.horizontalMargin, height - (lineWidth / 2));
        ctx.lineTo(width - this.horizontalMargin, height - (lineWidth / 2));
        ctx.stroke();
        ctx.closePath();

        ctx.beginPath();
        ctx.moveTo(halfWidth, 0);
        ctx.setLineDash([17, 17]);
        ctx.lineTo(halfWidth, height);
        ctx.stroke();
        ctx.closePath();
    }
}