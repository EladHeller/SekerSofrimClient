import types from '../../common/types';
import stations from '../../common/stations';

export const station = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case types.userLoggingOut:
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
            newState = fetchUserSuccess(action.user);
            break;
        default:
            newState = state;
            break;
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
    if (!loginDetails.userExist || !loginDetails.hasPassword){
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