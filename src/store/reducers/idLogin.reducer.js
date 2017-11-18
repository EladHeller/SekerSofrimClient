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
    if (idText && idText.match(/(?=^0{0,6}[1-9]{3,9}$)(?=^\d{9}$)/)){
        return {
            isCanSubmit:true,
            ID:idText
        }
    } else {
        return {
            isCanSubmit:false,
            ID:idText
        }
    }
};