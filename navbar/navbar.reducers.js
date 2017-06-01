import types from '../common/types'
export function user(state = {}, action) {
    switch (action.type) {
        case types.userLoggingOut:
            return {
                isLoggedIn:false
            };
        default:
            return state;
    }
}