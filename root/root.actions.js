import types  from '../common/types';
import FetchAction from '../helpers/fetch.action';
import {isMockMode} from '../common/config';
import {dispatch } from 'redux';
class UserFetchAction extends FetchAction{
    fetchSuccess(result){
        return {
            type:types.fetchUserSuccess,
            user: result.user
        };
    }
}
if (isMockMode) {
    MessagesFetchAction.fetchData = ()=>{
        return {
            type:types.fetchUserSuccess,
            user:undefined
        };
    };
}

export const fetchConnectedUser = (url)=>{
    const fetchAction = new UserFetchAction();
    return fetchAction.fetchData(url,'POST');
}