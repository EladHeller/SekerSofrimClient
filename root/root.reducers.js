import types from '../common/types'
export function ui(state = {}, action) {
    switch (action.type) {
        case types.windowResize:
            return {
                windowHeight: action.windowHeight,
                windowWidth: action.windowWidth,
            };
        default:
            return state;
    }
}