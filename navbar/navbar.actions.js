import {dispatch } from 'redux';
const types = require('../common/types')
export function userLoggingOut() {
    return {
        type: types.userLoggingOut
    };
}