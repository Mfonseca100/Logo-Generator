const inquirer = require('inquirer')
const {Circle, Square, Triangle} = require("./shapes");

class SVG{
    constructor(){
        this.textElement = ''
        this.shapeElement = ''
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}
        </svg>`
    }
    setTextElement(text, color){
        this.textElement = `<text x= "150" y="125" font-size= "60" text-anchor="middle">`
    }
    setShapeElement(shape){
        this.shapeElement = shape.render()
    
    }
}


//an array of questions for user input 
const questions = [
{
    type: "input",
    message: "text",
    name: "Enter up to (3) Characters:", 
},
{
    type: "input", 
    message: "text-color",
    name: "TEXT COLOR: Enter a color keyword (OR hexadecimal number):", 
}, 
{
    type: "input", 
    message: "shape", 
    name: "SHAPE COLOR: Enter a color keyword (OR hexadecimal number):",
},
{
    type: "list",
    message: "pixel image",
    name: "Choose what pixel image you would like?",
    choices: [
        "Circle", 
        "Square", 
        "Triangle"
    ]
}
];

function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            const SVG = new SVG();
            SVG.setTextElement(data.text, data.color.toLowerCase());
            SVG.setShapeElement(data.image);
            const writeSVG = `
            ${SVG.render()}
            `
            writeToFile(writeSVG, data.text);
        })
}