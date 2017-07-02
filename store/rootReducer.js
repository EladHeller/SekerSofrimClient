import { combineReducers } from 'redux';
import {user} from '../navbar/navbar.reducers';
import {messages} from '../message-bar/msgbar.reduecer';
import {station} from '../navigator/navigator.reducers';
import {idLogin} from '../navigator/id-form/idform.reducers'
import {passwordLogin} from '../navigator/password-form/passwordform.reducers'
export default combineReducers({
    user,
    messages,
    station,
    idLogin,
    passwordLogin
});