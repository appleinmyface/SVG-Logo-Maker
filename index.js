const inquirer = require('inquirer');
const fs = require('fs');
const { isValidColor } = require('./examples/lib/colors');
const { Circle, Triangle, Square } = require('./examples/lib/shapes');
const { SVGText } = require('./examples/lib/text');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter up to three characters for the logo:',
            validate: input => input.length <= 3 || 'Text must be three characters or less.'
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color (keyword or hex):',
            validate: isValidColor
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
            message: 'Enter the shape color (keyword or hex):',
            validate: isValidColor
        }
    ]);
};

const generateSVG = ({ text, textColor, shape, shapeColor }) => {
    let shapeElement;

    switch (shape) {
        case 'Circle':
            shapeElement = new Circle();
            break;
        case 'Triangle':
            shapeElement = new Triangle();
            break;
        case 'Square':
            shapeElement = new Square();
            break;
    }

    shapeElement.setColor(shapeColor);

    const svgText = new SVGText(text, textColor, shape);  // Pass shape to SVGText
    const svgContent = `
        <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeElement.render()}
            ${svgText.render()}
        </svg>
    `;

    return svgContent.trim();
};

const run = async () => {
    try {
        const answers = await promptUser();
        const svgContent = generateSVG(answers);

        fs.writeFileSync('examples/logos/logo.svg', svgContent);
        console.log('Generated examples/logos/logo.svg');
    } catch (error) {
        console.error('Error generating the SVG logo:', error);
    }
};

run();
