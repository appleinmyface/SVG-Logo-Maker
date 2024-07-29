const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Triangle, Square } = require('./lib/shapes');
const Text = require('./lib/text');
const { isValidColor } = require('./lib/colors');

async function generateLogo() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo text:',
            validate: (input) => input.length <= 3 || 'Text must be 3 characters or less.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hexadecimal):',
            validate: (input) => isValidColor(input) || 'Please enter a valid color.'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape for the logo:',
            choices: ['Circle', 'Triangle', 'Square']
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter the shape color (keyword or hexadecimal):',
            validate: (input) => isValidColor(input) || 'Please enter a valid color.'
        }
    ]);

    let shape;
    switch (answers.shape) {
        case 'Circle':
            shape = new Circle();
            break;
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }
    shape.setColor(answers.shapeColor);

    const text = new Text();
    text.setText(answers.text);
    text.setColor(answers.textColor);

    const svgContent = `
<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${shape.render()}
    ${text.render()}
</svg>`;

    fs.writeFileSync('logo.svg', svgContent.trim());

    console.log('Generated logo.svg');
}

generateLogo();
