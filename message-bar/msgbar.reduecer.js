import types from '../common/types'
export function messages(state = [], action) {
    switch (action.type) {
        case types.messagesFetchDataSucces:
            return action.messages;
        default:
            return state;
    }
}