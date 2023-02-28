const inquirer = require('inquirer');
const fs = require("fs");

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
        message: 'Enter the color of the shape?',
        name: 'shapeColor',
    },

])

.then((data) => {
    const generateSVG = logoGenerator(data)

    fs.writeFile('logo.svg', generateSVG, (err) =>
    err ? console.log(err) : console.log('You logo file has been saved!'));
})