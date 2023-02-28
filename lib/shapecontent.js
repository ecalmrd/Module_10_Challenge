class ShapeContent {
    constructor(color) {
        if (/^#[0-9A-F]{6}$/i.test(color)) {
            throw new Error(`Invalid color, enter a color "${color}`);
        }
        this.color = color;
    }
}

class TriangleShape extends ShapeContent {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    display() {
        const triangle = document.createElement('div');

        triangle.style.width = '0';
        triangle.style.height = '0';
        triangle.style.borderLeft = `${this.width / 2}px solid transparent`;
        triangle.style.borderRight = `${this.width / 2}px solid transparent`;
        triangle.style.borderBottom = `${this.height}px solid ${this.color}`;
        triangle.style.width = '300px';
        triangle.style.height = '200px';
        return triangle;
    }
}

// class SquareShape extends ShapeContent {
//     constructor(color, size) {
//         super(color);
//         this.size = size;
//     }

//     display() {
//         const square = document.createElement('div');

//         square.style.width = `${this.size}px`;
//         square.style.height = `${this.size}px`;
//         square.style.backgroundColor = this.color;
//         square.style.width = '300px';
//         square.style.height = '200px';
//         return square;
//     }
// }

// class CircleShape extends ShapeContent {
//     constructor(color, radius) {
//         super(color);
//         this.radius = radius;
//     }

//     display() {
//         const circle = document.createElement('div');

//         circle.style.width = `${this.radius * 2}px`;
//         circle.style.height = `${this.radius * 2}px`;
//         circle.style.borderRadius = '50%';
//         circle.style.backgroundColor = this.color;
//         circle.style.width = '300px';
//         circle.style.height = '200px';
//         return circle;
//     }
// }

module.exports = ShapeContent;