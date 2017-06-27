import types from '../common/types';
import stations from '../common/stations';

export const station = (state = {}, action) => {
    let newState;
    switch (action.type) {
        case types.userLoggingOut:
            newState = {
                station:stations.ID
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
            station:stations.ID
        };
    } else if (action.user.isAdmin) {
        newState = {
            station:stations.AdminArea
        };
    } else {
        newState = {
            station:stations.UserArea
        };
    }
    return newState;
};