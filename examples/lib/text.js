class SVGText {
    constructor(text, color, shape) {
        this.text = text;
        this.color = color;
        this.shape = shape;
    }

    render() {
        let y;
        switch (this.shape) {
            case 'Circle':
                y = 100;
                break;
            case 'Triangle':
                y = 125;
                break;
            case 'Square':
                y = 120;
                break;
            default:
                y = 120;
        }

        return `<text x="150" y="${y}" font-size="60" text-anchor="middle" dominant-baseline="middle" fill="${this.color}">${this.text}</text>`;
    }
}

module.exports = { SVGText };
