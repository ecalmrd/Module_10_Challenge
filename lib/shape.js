class ShapeContent {
    constructor() {
        this.color ="";
    }
    setColor(color) {
        this.color = color;
    }
}

class Triangle extends ShapeContent {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}"/>`
    }
}

class Circle extends ShapeContent {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Square extends ShapeContent {
    render() {
        return `<rect x="90" y="40" width="130" height="150" fill="${this.color}"/>`
    }
}

module.exports = {Circle, Triangle, Square};