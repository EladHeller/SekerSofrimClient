import types from '../../common/types';
import FetchAction from './fetch.action';
import config from '../../common/config';
import {excel2json,json2excel} from '../../services/excel.service';
import {dispatch } from 'redux';
class UploadMessages extends FetchAction {
    fetchSuccess(result){
        return {
            type:types.successUploadMessages,
        };
    }
}

class UploadUsers extends FetchAction {
    fetchSuccess(result){
        return {
            type:types.successUpdateUsers,
        };
    }
}

class FetchUsers extends FetchAction {
    fetchSuccess(result){
        json2excel(result, 'Users');
        return {
            type:types.fetchUsersSuccess,
        };
    }
}

class FetchConfirmRequests extends FetchAction {
    fetchSuccess(result){
        return {
            type:types.fetchConfirmRequestsSucces,
            changeDetailsRequests: result
        };
    }
}

export function uploadMessagesFile(fileInput) {
    return async dispatch => {
        try {
            const messages = await excel2json(fileInput, false);
            dispatch(new UploadMessages().fetchData(config.rest.manage.updateMessages,'POST',{messages:messages.map(arr=>arr[0])}));
        } catch (e) {
            dispatch({
                type:types.fetchFailed,
                error:e
            });
        }
    }
}

export function uploadUsersFile(fileInput) {
    return async dispatch => {
        try {
            const users = await excel2json(fileInput, true);
            console.log(users);
            //dispatch(new UploadUsers().fetchData(config.rest.manage.updateUsers,'POST',{users}));
        } catch (e) {
            console.error(e);
            dispatch({
                type:types.fetchFailed,
                error:e
            });
        }
    }
}

export function downloadUsersExcel() {
    return new FetchUsers().fetchData(config.rest.manage.getUsers, 'POST');
}

export function getChangeDetailsRequests(){
    return new FetchConfirmRequests().fetchData(config.rest.manage.getUserDetailsConfirms, 'POST');
}