const Text = require('./text');

test('text render', () => {
    const text = new Text();
    text.setText('SVG');
    text.setColor('white');
    expect(text.render()).toEqual('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>');
});
