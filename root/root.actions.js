import types  from '../common/types';
import FetchAction from '../helpers/fetch.action';
import config from '../common/config';
import {dispatch } from 'redux';
class UserFetchAction extends FetchAction{
    fetchSuccess(result){
        return {
            type:types.fetchUserSuccess,
            user: result.user
        };
    }
}
if (config.isMockMode) {
    UserFetchAction.prototype.fetchData = function(){
          return this.fetchSuccess({user:undefined});
    };
}

export const fetchConnectedUser = (url)=>{
    const fetchAction = new UserFetchAction();
    return fetchAction.fetchData(url,'POST');
}