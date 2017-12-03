import { combineReducers } from 'redux';
import {user} from './reducers/user.reducer';
import {messages} from './reducers/messages.reduecer';
import {station} from './reducers/station.reducer';
import {idLogin} from './reducers/id-login.reducer';
import {passwordLogin} from './reducers/password-login.reducer';
import {ui} from './reducers/ui.reducer';
import {admin} from './reducers/admin.reducer';
import {userDetails} from './reducers/user-details.reducer';
export default combineReducers({
    userDetails,
    user,
    messages,
    station,
    idLogin,
    passwordLogin,
    ui,
    admin
});