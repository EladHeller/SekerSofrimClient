import types  from '../../common/types';
import FetchAction from '../../helpers/fetch.action';
import config from '../../common/config';
import {dispatch } from 'redux';
class PasswordLoginFetch extends FetchAction{
    fetchSuccess(result){
        return {
            type:types.successPasswordLogin,
            loginDetails: result
        };
    }
}
class ResetPasswordFetch extends FetchAction{
    fetchSuccess(result){
        return {
            type:types.successResetPassword,
            loginDetails: result
        };
    }
}
if (config.isMockMode) {
    ResetPasswordFetch.prototype.fetchData = function(){
        return this.fetchSuccess({
            userExist: true,
            sendPasswordTo: 'SMS'
        });
    }
    PasswordLoginFetch.prototype.fetchData = function(){
        return this.fetchSuccess({
            user:{
                award: 3000,
                firstName: 'משה',
                lastName:'כהן',
                pseudonym:'המחבר',
                ID:'123',
                password:'1111',
                phone:'0541231231',
                tel:'029929911',
                email: 'a@a.c'
            }
        });
    };
}

export const fetchSubmit=(url,password, ID)=>{
    const fetchAction = new PasswordLoginFetch();
    return fetchAction.fetchData(url,'POST',{password, ID});
}
export const resetPassword=(url, ID)=>{
    const fetchAction = new PasswordLoginFetch();
    return fetchAction.fetchData(url,'POST',{ID});
}

export const passwordTextChanged=(password)=>{
    return {
        type:types.passwordTextChanged,
        passwordText: password
    };
}