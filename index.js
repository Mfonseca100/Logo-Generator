const fs = require("fs");
const inquirer = require("inquirer");
const { Circle, Square, Triangle } = require("./lib/shapes");

class SVG {
    constructor() {
        this.textElement = '';
        this.shapeElement = '';
    }
    render() {
        return `<svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}
          </svg>`;
    }
    setTextElement(text, color) {
        this.textElement = `<text x= "150" y="125" font-size= "60" text-anchor="middle" fill="${color}">${text}</text>`;
    }
    setShapeElement(shape) {
        shape.setColor(color);
        this.shapeElement = shape.render();
    }
}

//an array of questions for user input
const questions = [
    {
        type: "input",
        name: "text",
        message: "Enter no more than 3 Characters:",
        validation: (value) => {
            if (value.length <= 3) {
                return true;
            } else {
                return "Characters must be no more than 3 characters";
            }
        },
    },
    {
        type: "input",
        name: "textColor",
        message: "TEXT COLOR: Enter a color keyword (OR hexadecimal number):",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "SHAPE COLOR: Enter a color keyword (OR hexadecimal number):",
    },
    {
        type: "list",
        name: "shape",
        message: "What is your image of choice?",
        choices: ["Circle", "Square", "Triangle"],
    },
];

// Function to write data to file
function writeToFile(fileName, data) {
    console.log(`Writing [${data}] to file [${fileName}]`);
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Congratulations, you have Generated a logo.svg!");
    });
}

async function init() {
    console.log("Starting init");

    const svg = new SVG();

    const answers = await inquirer.prompt(questions);
    console.log("User's answers:", answers);

    const { text, textColor, shapeColor, shape } = answers;

    svg.setTextElement(text, textColor);

    let shapeObj;

    switch (shape) {
        case "Circle":
            shapeObj = new Circle(shapeColor);
            break;
        case "Square":
            shapeObj = new Square(shapeColor);
            break;
        case "Triangle":
            shapeObj = new Triangle(shapeColor);
            break;
        default:
            shapeObj = new Circle(shapeColor);
            break;
    }

    svg.setShapeElement(shapeObj);

    const svgString = svg.render();

    writeToFile("logo.svg", svgString);
}

init();