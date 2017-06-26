const types = require('../common/types');
//import fetch from 'whatwg-fetch';
import {dispatch } from 'redux';

export const loadingData =(bool)=>{
    return {
        type: types.loadingData,
        isLoading:bool
    }
}

export const screenResize = (height, width) => {
    return {
        type: types.windowResize,
        windowHeight: height,
        windowWidth: width
    };
};
export const fetchConnectedUserSuccess =(user)=>{
    return {
        type:types.fetchUserSuccess,
        user
    }
};
export const fetchConnectedUserFailed =(hasError)=>{
    return {
        type:types.fetchUserFailed,
        hasError:hasError
    }
};


export const fetchConnectedUser = (url)=>{
    return (dispatch) => {
        dispatch(loadingData(true));
        fetch(url,{
            method:'POST'
        }).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            dispatch(loadingData(false));
            return response;
        })
        .then((response) => response.json())
        .then((result) => dispatch(fetchConnectedUserSuccess(result.user)))
        .catch(() => dispatch(fetchConnectedUserFailed(true)));
    };
}