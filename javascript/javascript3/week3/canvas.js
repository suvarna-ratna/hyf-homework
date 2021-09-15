class Circle {
    constructor(x, y, r, startAngle, endAngle, fillColor) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.fillColor = fillColor;
    }
    draw() {
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');

        context.beginPath();
        context.arc(this.x, this.y, this.r, this.startAngle, this.endAngle);
        context.fillStyle = this.fillColor;
        context.fill();
        context.stroke();
    }
}


function fillingColor() {
    return 'rgb(' + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ')';
}

function createCircle() {
    const canvas = document.getElementById('myCanvas')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    const circleWidth = Math.floor(Math.random() * window.screen.width);
    const circleHeight = Math.floor(Math.random() * window.screen.height);
    const circleRadius = Math.floor(Math.random() * 100);
    const circleColor = fillingColor();
    const randomCircle = new Circle(circleWidth, circleHeight, circleRadius, 0, 2 * Math.PI, circleColor);
    randomCircle.draw();
}

//setInterval(createCircle, 100);
document.body.addEventListener("mousemove", createCircle);