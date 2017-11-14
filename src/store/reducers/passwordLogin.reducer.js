
import types from '../../common/types';
import * as _ from 'lodash';

export const passwordLogin=(state ={}, action)=>{
    let newState = state;
    switch(action.type){
        case types.passwordTextChanged:
            newState= passwordTextChanged(state, action.passwordText);
            break;
        case types.successResetPassword:
            newState = _.cloneDeep(state);
            if (action.loginDetails.sendPasswordTo){
                newState.passwordSendTo = action.loginDetails.sendPasswordTo;
            }
            break;
        case types.successIdLogin:
            newState= successIdLogin(state, action.loginDetails);
            break;
    }
    return newState;
};
const successIdLogin = (state, loginDetails)=>{
    const newState = _.cloneDeep(state);
    if (loginDetails.passwordSend){
        newState.passwordSendTo=loginDetails.sendPasswordTo;
    }

    return newState;
};
const passwordTextChanged=(state,passwordText)=>{
    const newState = _.cloneDeep(state);
    if (passwordText){
        newState.isCanSubmit=true;
    } else {
        newState.isCanSubmit=false;
    }
    return newState;
};