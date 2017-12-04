import types from '../../common/types';
import stations from '../../common/stations';

export const station = (state = {}, action) => {
    let newState = state;
    switch (action.type) {
        case types.succesUserLogedOut:
            newState = {
                stationName:stations.ID
            };
            break;
        case types.fetchUserSuccess:
            newState = fetchUserSuccess(action.user);
            break;
        case types.successIdLogin:
            newState = successIdLogin(action.loginDetails);
            break;
        case types.successPasswordLogin:
            newState = fetchPasswordSuccess(action.loginDetails, state);
            break;
        case types.changeStation:
            newState = {stationName: stations[action.station]};
            break;
    }
    return newState;
}

const fetchPasswordSuccess =(user, state)=>{
    let newState = state;
    if (user) {
        if (user.isAdmin){
            newState ={stationName: stations.AdminArea};
        } else {
            newState ={stationName: stations.UserArea};
        }
    }
    return newState;
}

const fetchUserSuccess=(user)=>{
    let newState;
    if (!user) {
        newState = {
            stationName:stations.ID
        };
    } else if (user.isAdmin) {
        newState = {
            stationName:stations.AdminArea
        };
    } else {
        newState = {
            stationName:stations.UserArea
        };
    }
    return newState;
};

const successIdLogin = (loginDetails)=>{
    let newState;
    if (!loginDetails.userExist || (!loginDetails.hasPassword && !loginDetails.passwordSend)){
        newState = {
            stationName:stations.UserDetails
        };
    } else {
        newState = {
            stationName:stations.Password
        };
    }
    return newState;
}