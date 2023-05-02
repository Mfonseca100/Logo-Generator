const {Circle, Square, Triangle} = require("./shapes")
//Circle npm test
describe('Circle', () => {
    test('renders correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`)
    });
})
//Square
describe('Square', () => {
    test('renders correctly', () => {
        const shape = new Square();
        var color = ('green')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<rect x="5" y="5" width="200" height="200" fill="${color}"/>`)
    });
})
//Triangle 
describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        var color = ('pink')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<polygon points="50 15, 100 100, 0 100" fill="${color}"/>`)
    });
})