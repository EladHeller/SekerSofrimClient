import types  from '../../common/types';

export function navigate(station) {
    return {
        type: types.changeStation,
        station
    }
}