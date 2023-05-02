class Shapes {
    constructor() {
        this.color = '';
    }
    setColor(color) {
        this.color = color;
    }
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
    }
}

class Square extends Shapes {
    render() {
        return `<rect x="5" y="5" width="200" height="200" fill="${this.color}"/>`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}"/>`
    }
}
module.exports = { Circle, Square, Triangle };