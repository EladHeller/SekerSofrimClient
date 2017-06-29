import types from '../common/types';
import stations from '../common/stations';

export const station = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case types.userLoggingOut:
            newState = {
                stationName:stations.ID
            };
            break;
        case types.fetchUserSuccess:
            newState = fetchUserSuccess(action);
            break;
        default:
            newState = state;
            break;
    }
    return newState;
}

const fetchUserSuccess=(action)=>{
    let newState;
    if (!action.user) {
        newState = {
            stationName:stations.ID
        };
    } else if (action.user.isAdmin) {
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