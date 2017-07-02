import types from '../../common/types';

export const idLogin=(state ={}, action)=>{
    let newState = state;
    switch(action.type){
        case types.idTextChanged:
            newState= idTextChanged(action.idText);
            break;
    }
    return newState;
};

const idTextChanged=(idText)=>{
    if (idText && idText.match(/^\d{3,9}$/)){
        return {
            isCanSubmit:true
        }
    } else {
        return {
            isCanSubmit:false
        }
    }
};