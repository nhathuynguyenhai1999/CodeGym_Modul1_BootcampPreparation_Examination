class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    render(canvas) {
        const ctx = canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();  // Use fill() instead of stroke() to fill the circle
    }
}

const circle = new Circle(50, 50, 80, '#000000');  // Correct the variable name 'cirle' to 'circle'
const canvas = document.getElementById('CirleCanvas');
circle.render(canvas);
