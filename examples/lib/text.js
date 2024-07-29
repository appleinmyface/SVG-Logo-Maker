class Text {
    constructor() {
        this.text = '';
        this.color = '';
    }

    setText(text) {
        this.text = text;
    }

    setColor(color) {
        this.color = color;
    }

    render() {
        return `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text>`;
    }
}

module.exports = Text;
