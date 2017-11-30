import types  from '../../common/types';
import FetchAction from './fetch.action';
import config from '../../common/config';
import {dispatch } from 'redux';

class UserFetchAction extends FetchAction{
    fetchSuccess(result){
        return {
            type:types.fetchUserSuccess,
            user: result.user
        };
    }
}

class ChangeDetailsFetch extends FetchAction {
    fetchSuccess(result){
        return {
            type:types.successChangeUserDetails,
            changeDetailsResponse: result
        };
    }
}
if (config.isMockMode) {
    ChangeDetailsFetch.prototype.fetchData = function(){
        return this.fetchSuccess({});
    }
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

export const fetchChangeDetails=(userDetails)=>{
    const fetchAction = new ChangeDetailsFetch();
    return fetchAction.fetchData(config.rest.updateUserDetails,'POST',userDetails);
}

export const fetchConnectedUser = ()=>{
    const fetchAction = new UserFetchAction();
    return fetchAction.fetchData(config.rest.getConnectedUser,'POST');
}

export const changeUserDetails=(user)=>{
    return {
        type:types.userDetailsChanged,
        user
    };
}

export function userLoggingOut() {
    return {
        type: types.userLoggingOut
    };
}