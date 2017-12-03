import types from '../../common/types';

export function userDetails(state = {}, action){
    let newState = state;
    switch(action.type){
        case types.requestUserDetailsChanged:
            newState = Object.assign({},state,{userDetailsConfirm:action.userDetails})
            break;
    }
    return newState;
}