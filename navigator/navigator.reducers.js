import types from '../common/types';
import stations from '../common/stations';

export const station = (state = {}, action) => {
    switch (action.type) {
        case types.userLoggingOut:
            return {
                station:stations.Welcome
            };
        default:
            return state;
    }
}