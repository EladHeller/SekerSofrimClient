import types  from '../../common/types';
import FetchAction from './fetch.action';
import config from '../../common/config';
import {dispatch } from 'redux';

class IdLoginFetch extends FetchAction{
    fetchSuccess(result){
        return {
            type:types.successIdLogin,
            loginDetails: result
        };
    }
}
if (config.isMockMode) {
    IdLoginFetch.prototype.fetchData = function(){
        return this.fetchSuccess({
            userExist: true,
            hasPassword: true,
            passwordSend: true,
            sendPasswordTo: 'email'// sms
        });
    };
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