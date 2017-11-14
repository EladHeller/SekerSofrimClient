import types  from '../../../common/types';
import FetchAction from '../../../helpers/fetch.action';
import config from '../../../common/config';
import {dispatch } from 'redux';
class ChangeDetailsFetch extends FetchAction{
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
}

export const fetchChangeDetails=(url,userDetails)=>{
    const fetchAction = new ChangeDetailsFetch();
    return fetchAction.fetchData(url,'POST',userDetails);
}