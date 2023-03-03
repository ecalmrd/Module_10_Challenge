const { Circle, Triangle, Square } = require("../lib/shape.js");


describe('Triangle', () => {
    test("should make a purple triangle", () => {
        const testTriangle = `<polygon points="150, 18 244, 182 56, 182" fill="purple"/>`;
        const triangle = new Triangle();
        triangle.setColor('purple');
        const actualTriangle = triangle.render();
        expect(actualTriangle).toEqual(testTriangle);
    })
});

describe('Square', () => {
    test("should make a yellow square", () => {
        const testSquare = `<rect x="90" y="40" width="130" height="150" fill="yellow"/>`;
        const square = new Square();
        square.setColor('yellow');
        const actualSquare = square.render();
        expect(actualSquare).toEqual(testSquare);
    })
});

describe('Circle', () => {
    test("should make a green circle", () => {
        const testCircle = `<circle cx="150" cy="100" r="80" fill="green"/>`;
        const circle = new Circle();
        circle.setColor('green');
        const actualCircle = circle.render();
        expect(actualCircle).toEqual(testCircle);
    })
});