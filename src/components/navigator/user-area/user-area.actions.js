import {successChangeUserDetails, userDetailsChanged}  from '../../../common/types';
import FetchAction from '../../../helpers/fetch.action';
import config from '../../../common/config';
import {dispatch } from 'redux';
class ChangeDetailsFetch extends FetchAction {
    fetchSuccess(result){
        return {
            type:successChangeUserDetails,
            changeDetailsResponse: result
        };
    }
}
if (config.isMockMode) {
    ChangeDetailsFetch.prototype.fetchData = function(){
        return this.fetchSuccess({});
    }
}

export const fetchChangeDetails=(userDetails)=>{
    const fetchAction = new ChangeDetailsFetch();
    return fetchAction.fetchData(config.rest.updateUserDetails,'POST',userDetails);
}

export const changeUserDetails=(user)=>{
    return {
        type:userDetailsChanged,
        user
    };
}