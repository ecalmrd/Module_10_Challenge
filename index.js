const { Circle, Triangle, Square } = require("./lib/shape");
const SVG = require("./lib/svg")
const inquirer = require("inquirer");
const fs = require("fs");


inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter text up to 3 characters for your logo',
            name: 'text',
        },

        {
            type: 'input',
            message: 'Enter the color of the text',
            name: 'textColor',
        },

        {
            type: 'list',
            message: 'What in the shape of your logo?',
            name: 'shape',
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
        //the response parameter is taking data from the userinput from the prompts
        //the following if statement will apply the shape based on the response
        let shape;
        if (response.shape.toLowerCase() === "circle") {
            shape = new Circle()
        }
        if (response.shape.toLowerCase() === "square") {
            shape = new Square()
        }
        if (response.shape.toLowerCase() === "triangle") {
            shape = new Triangle()
        }
        //the setColor() function is called from the ShapeContent class in shape.js
        //setColor() takes in the response from the prompt of shapeColor and apply color of logo
        shape.setColor(response.shapeColor)
    
        //set const Svg is used to call class SVG
        //new SVG() is used to update class SVG based on the response from the prompts
        const Svg = new SVG()
        //.setText and .setShape are functions from class SVG
        //response.text and response.textColor will be applied
        Svg.setText(response.text, response.textColor)
        Svg.setShape(shape)

        fs.writeFileSync("logo.svg", Svg.render())

    })


