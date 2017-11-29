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
          return this.fetchSuccess({user:{award: 3000,
            firstName: 'משה',
            lastName:'כהן',
            isAdmin:false,
            pseudonym:'המחבר',
            ID:'123',
            password:'1111',
            phone:'0541231231',
            tel:'029929911',
            email: 'a@a.c'}});
    };
}

export const fetchConnectedUser = ()=>{
    const fetchAction = new UserFetchAction();
    return fetchAction.fetchData(config.rest.getConnectedUser,'POST');
}