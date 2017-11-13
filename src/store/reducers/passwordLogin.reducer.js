
import types from '../../common/types';

export const passwordLogin=(state ={}, action)=>{
    let newState = state;
    switch(action.type){
        case types.passwordTextChanged:
            newState= passwordTextChanged(state, action.passwordText);
            break;
        case types.successIdLogin:
            newState= successIdLogin(state, action.loginDetails);
            break;
    }
    return newState;
};
const successIdLogin = (state, loginDetails)=>{
    const newState = Object.assign({},state);
    if (loginDetails.passwordSend){
        newState.passwordSendTo=loginDetails.sendPasswordTo;
    }

    return newState;
};
const passwordTextChanged=(state,passwordText)=>{
    const newState = Object.assign({},state);
    if (passwordText){
        newState.isCanSubmit=true;
    } else {
        newState.isCanSubmit=false;
    }
    return newState;
};