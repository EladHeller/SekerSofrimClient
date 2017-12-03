import {successUploadMessages, fetchFailed}  from '../../common/types';
import FetchAction from './fetch.action';
import config from '../../common/config';
import {excel2json} from '../../services/excel.service';
import {dispatch } from 'redux';
class UploadMessages extends FetchAction {
    fetchSuccess(result){
        return {
            type:successUploadMessages,
            changeDetailsResponse: result
        };
    }
}

export const uploadMessagesFile = (fileInput)=>{
    return async dispatch => {
        try {
            const messages = await excel2json(fileInput, false);
            dispatch(new UploadMessages().fetchData(config.rest.manage.updateMessages,'POST',{messages:messages.map(arr=>arr[0])}));
        } catch (e) {
            console.error(e);
        }
    }
}