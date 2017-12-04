import types  from '../../common/types';
import FetchAction from './fetch.action';
import config from '../../common/config';

class RequestUpdateUserDetails extends FetchAction{
    fetchSuccess(result){
        return {
            type:types.requestUpdateUserDetailsSuccess
        };
    }
}

export function userDetailsChanged(userDetails) {
    return {
        type: types.requestUserDetailsChanged,
        userDetails
    }
}

export function requestUpdateUserDetails(userDetails) {
    return new RequestUpdateUserDetails().fetchData(config.rest.requestUpdateUserDetails, 'POST', {user: userDetails});
}