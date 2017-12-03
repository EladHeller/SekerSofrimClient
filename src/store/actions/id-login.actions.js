import types  from '../../common/types';
import FetchAction from './fetch.action';
import config from '../../common/config';
import {dispatch } from 'redux';

class IdLoginFetch extends FetchAction{
    fetchSuccess(result){
        if(config.isMockMode) {
            result = {
                userExist: false
                // userExist: true,
                // hasPassword: true,
                // passwordSend: true,
                // sendPasswordTo: 'email'// sms
            }
        }
        return {
            type:types.successIdLogin,
            loginDetails: result
        };
    }
}

export const fetchIdLogin=(ID)=>{
    const fetchAction = new IdLoginFetch();
    return fetchAction.fetchData(config.rest.idLogin, 'POST', {ID});
}

export const idTextChanged=(id)=>{
    return {
        type:types.idTextChanged,
        idText: id
    };
}