import { combineReducers } from 'redux';
import {user} from './reducers/user.reducer';
import {messages} from './reducers/messages.reduecer';
import {station} from './reducers/station.reducer';
import {idLogin} from './reducers/idLogin.reducer';
import {passwordLogin} from './reducers/passwordLogin.reducer';
export default combineReducers({
    user,
    messages,
    station,
    idLogin,
    passwordLogin
});