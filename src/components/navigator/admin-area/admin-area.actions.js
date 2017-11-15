import {successUploadMessages}  from '../../../common/types';
import FetchAction from '../../../helpers/fetch.action';
import config from '../../../common/config';
import {dispatch } from 'redux';
class UploadMessagesFetch extends FetchAction{
    fetchSuccess(result){
        return {
            type:successUploadMessages,
            changeDetailsResponse: result
        };
    }
}
if (config.isMockMode) {
    UploadMessagesFetch.prototype.fetchData = function(){
        return this.fetchSuccess({});
    }
}

export const fetchUploadMessages=(url,messages)=>{
    const fetchAction = new UploadMessagesFetch();
    return fetchAction.fetchData(url,'POST',messages);
}