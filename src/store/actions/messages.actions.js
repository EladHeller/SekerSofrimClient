import types  from '../../common/types';
import FetchAction from './fetch.action';
import config from '../../common/config';
import {dispatch } from 'redux';

class MessagesFetchAction extends FetchAction {
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

if (config.isMockMode) {
    MessagesFetchAction.prototype.fetchData = function(){
        return this.fetchSuccess([
                {text:'בדיקה בדיקה בדיקה'},
                {text:'הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה הודעה ממש ארוכה'},
                {text:'בדיקה אחרת סתם'}]);
    };
}

export const messagesFetchData = ()=>{
    const fetchRequest = new MessagesFetchAction();
    return fetchRequest.fetchData(config.rest.getMessages ,'POST');
}