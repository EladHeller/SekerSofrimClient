const types = require('../common/types');

export function screenResize(height, width) {
    return {
        type: types.windowResize,
        windowHeight: height,
        windowWidth: width
    };
}