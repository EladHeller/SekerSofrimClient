import { combineReducers } from 'redux';
import {user} from '../navbar/navbar.reducers';
import {messages} from '../message-bar/msgbar.reduecer';
import {station} from '../navigator/navigator.reducers';
export default combineReducers({
    user,
    messages,
    station
});