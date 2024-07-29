const Color = require('color');

function isValidColor(color) {
    try {
        Color(color);
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = { isValidColor };
