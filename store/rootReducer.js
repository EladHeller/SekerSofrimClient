import { combineReducers } from 'redux';
//import { items, itemsHasErrored, itemsIsLoading } from '../items/items.reducers';
import {user} from '../navbar/navbar.reducers';
import {messages} from '../message-bar/msgbar.reduecer';
export default combineReducers({
    user,
    messages
});