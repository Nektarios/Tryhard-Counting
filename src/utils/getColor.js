const convert = require('color-convert');

function getColor(colorName) {
    return convert.keyword.hex(colorName);
}

module.exports = {
    getColor
}
