const {Circle, Triangle, Square} = require ('../lib/shapecontent');
const SVG = require ('../lib/svg')
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
.prompt([
    {
        type: 'input',
        message: 'Enter text up to 3 characters for your logo',
        name: 'textLogo',
    },

    {
        type: 'input',
        message: 'Enter the color of the text',
        name: 'textColor',
    },

    {
        type: 'list',
        message: 'What in the shape of your logo?',
        name: 'shapeLogo',
        choices: [
            "Circle",
            "Triangle",
            "Square",
        ],
    },

    {
        type: 'input',
        message: 'Enter the color of the shape',
        name: 'shapeColor',
    },

])

.then((response) => {
    console.log(response);
    let shape;
    if (response.shape === "circle") {
        shape= new Circle()
    }
    if (response.shape === "square") {
        shape= new Square()
    }
    if (response.shape === "triangle") {
        shape= new Triangle()
    }
    shape.setColor(response.shapeColor)

    const Svg = new SVG ()
    Svg.setText(response.text, response.textColor)
    Svg.setShape(shape)

fs.writeFileSync("logo.svg", SVG.render()) 
})
