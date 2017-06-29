import types  from '../../common/types';
import FetchAction from '../../helpers/fetch.action';
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
    UserFetchAction.prototype.fetchData = ()=>{
        return fetchSuccess({
            userExist: true,
            hasPassword: true,
            passwordSend: true,
            sendPasswordTo: 'email'// sms
        });
    };
}

export const fetchConnectedUser = (url)=>{
    const fetchAction = new UserFetchAction();
    return fetchAction.fetchData(url,'POST');
}