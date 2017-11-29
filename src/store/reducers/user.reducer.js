import types from '../../common/types';
import * as _ from 'lodash';

export function user(state = {}, action) {
    switch (action.type) {
        case types.userLoggingOut:
            return {
                isLoggedIn:false
            };
        case types.fetchUserSuccess:
            return fetchUserSuccess(state, action.user);
            break;
        case types.successPasswordLogin:
            return fetchUserSuccess(state, action.loginDetails.user);
            break;
        case types.userDetailsChanged:
            return Object.assign({},action.user);
            break;
        default:
            return state;
    }
}

const fetchUserSuccess = (state, user)=>{
    if (user) {
        return Object.assign({isLoggedIn:true},user);
    } else {
        return {
            isLoggedIn:false
        };
    }
}