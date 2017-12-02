import types from '../../common/types';

export const ui = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case types.toggleChangeUserDetailsModal:
            newState = Object.assign({},state,{userDetailsModalOpen:!state.userDetailsModalOpen})
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}