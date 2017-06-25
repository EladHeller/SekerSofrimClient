import { combineReducers } from 'redux';
//import { items, itemsHasErrored, itemsIsLoading } from '../items/items.reducers';
import {user} from '../navbar/navbar.reducers';
import {messages} from '../message-bar/msgbar.reduecer';
import {ui} from '../root/root.reducers';
export default combineReducers({
    user,
    messages,
    ui
});