const { isValidColor } = require('./colors');

test('valid color keyword', () => {
    expect(isValidColor('red')).toBe(true);
    expect(isValidColor('blue')).toBe(true);
    expect(isValidColor('lime')).toBe(true);
    expect(isValidColor('black')).toBe(true);
    expect(isValidColor('white')).toBe(true);
});

test('valid hex color', () => {
    expect(isValidColor('#ffffff')).toBe(true);
    expect(isValidColor('#fff')).toBe(true); // test for 3-character hex
});

test('invalid color', () => {
    expect(isValidColor('invalidcolor')).toBe(false);
    expect(isValidColor('#123abz')).toBe(false); // test for invalid hex character
});
