import types from '../../common/types';

export const admin=(state ={}, action)=>{
    let newState = state;
    switch(action.type){
        case types.fetchConfirmRequestsSucces:
            newState = Object.admin({},state,{changeDetailsRequests:action.changeDetailsRequests});
            break;
    }
    return newState;
};
