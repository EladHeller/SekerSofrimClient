import types from '../common/types';
import { dispatch } from 'redux';
import FetchAction from '../helpers/fetch.action';
import {isMockMode} from '../common/config';
class MessagesFetchAction extends FetchAction{
    fetchSuccess(messages){
        return {
            type:types.fetchMessagesSuccess,
            messages
        };
    };
    fetchFailed(hasError){
        return {
            type:types.fetchMessagesFailed,
            hasError
        };
    }
}

if (isMockMode) {
    MessagesFetchAction.fetchData = ()=>{
        return {
            type:types.fetchMessagesSuccess,
            messages:[
                'בדיקה בדיקה בדיקה',
                'הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה',
                'בדיקה אחרת סתם',
            ]
        };
    };
}

export const messagesFetchData = (url)=>{
    const fetchRequest = new MessagesFetchAction();
    return fetchRequest.fetchData(url,'POST');
}