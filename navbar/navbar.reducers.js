import types from '../common/types'
export function user(state = {}, action) {
    switch (action.type) {
        case types.userLoggingOut:
            return {
                isLoggedIn:false
            };
        case types.fetchUserSuccess:
            return fetchUserSuccess(state,action);
        default:
            return state;
    }
}

const fetchUserSuccess = (state, action)=>{
    if (action.user) {
        return action.user;
    } else {
        return {
            isLoggedIn:false
        };
    }
}