import types from '../../common/types';

export const ui = (state = {}, action) => {
    let newState = state;
    switch (action.type) {
        case types.toggleChangeUserDetailsModal:
            newState = Object.assign({},state,{userDetailsModalOpen:!state.userDetailsModalOpen})
            break;
        case types.successChangeUserDetails:
            newState = Object.assign({},state,{userDetailsModalOpen:!state.userDetailsModalOpen})
            break;
        case types.toggleMessagesModal:
            newState = Object.assign({},state,{messagesModalOpen:!state.messagesModalOpen})
            break;
    }
    return newState;
}